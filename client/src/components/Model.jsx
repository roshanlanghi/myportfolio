import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const modelRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: null, y: null });

  // Load-compressed GLB (Draco or Meshopt recommended)
  const { scene } = useGLTF("/Lambo.glb");

  // ⚡ Freeze rendering when tab inactive (performance boost)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        modelRef.current.visible = false;
      } else {
        modelRef.current.visible = true;
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const handlePointerMove = (event) => {
      if (lastPointer.current.x === null) {
        lastPointer.current = { x: event.clientX, y: event.clientY };
        return;
      }

      const dx = event.clientX - lastPointer.current.x;
      const dy = event.clientY - lastPointer.current.y;

      lastPointer.current = { x: event.clientX, y: event.clientY };

      targetRotation.current = {
        y: clamp(targetRotation.current.y + dx * 0.003, -0.7, 0.7),
        x: clamp(targetRotation.current.x + dy * 0.0015, -0.3, 0.3),
      };
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  // ⚡ Only minimal animation (light performance)
  useFrame((state) => {
    if (!modelRef.current || document.hidden) return;

    const t = state.clock.getElapsedTime();
    const idleWiggle = Math.sin(t * 0.2) * 0.06;
    targetRotation.current.x *= 0.92;
    targetRotation.current.y *= 0.92;
    modelRef.current.rotation.y +=
      (targetRotation.current.y + idleWiggle - modelRef.current.rotation.y) *
      0.08;
    modelRef.current.rotation.x +=
      (targetRotation.current.x - modelRef.current.rotation.x) * 0.08;
  });

  // ⚡ Reduce draw calls: ensure frustumCulled ON & shadows off for mobile
  useEffect(() => {
    scene.traverse((obj) => {
      obj.frustumCulled = true;

      // Disable unnecessary shadows for performance
      obj.castShadow = false;
      obj.receiveShadow = false;
    });
  }, [scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={[2, -0.1, 3]}
    />
    
  );
};

export default Model;

// Required for GLTF caching
useGLTF.preload("/Lambo.glb");

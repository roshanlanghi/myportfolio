import React, { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const modelRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: null, y: null });

  const materials = useMemo(
    () => ({
      body: { color: "#1f2937", roughness: 0.4, metalness: 0.2 },
      keyboard: { color: "#111827", roughness: 0.6, metalness: 0.1 },
      screen: { color: "#0f172a", roughness: 0.2, metalness: 0.05, emissive: "#38bdf8", emissiveIntensity: 0.5 },
      trackpad: { color: "#374151", roughness: 0.5, metalness: 0.1 },
    }),
    []
  );

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

  return (
    <group ref={modelRef} position={[2, -0.2, 3]} scale={1.1}>
      <mesh position={[0, -0.08, 0]} castShadow={false} receiveShadow={false}>
        <boxGeometry args={[2.3, 0.12, 1.6]} />
        <meshStandardMaterial {...materials.body} />
      </mesh>
      <mesh position={[0, -0.02, 0.15]} castShadow={false} receiveShadow={false}>
        <boxGeometry args={[2.1, 0.04, 1.2]} />
        <meshStandardMaterial {...materials.keyboard} />
      </mesh>
      <mesh position={[0, -0.02, -0.45]} castShadow={false} receiveShadow={false}>
        <boxGeometry args={[0.7, 0.03, 0.4]} />
        <meshStandardMaterial {...materials.trackpad} />
      </mesh>
      <group position={[0, 0.62, -0.75]} rotation={[-1.1, 0, 0]}>
        <mesh castShadow={false} receiveShadow={false}>
          <boxGeometry args={[2.1, 1.3, 0.08]} />
          <meshStandardMaterial {...materials.body} />
        </mesh>
        <mesh position={[0, 0, 0.05]} castShadow={false} receiveShadow={false}>
          <boxGeometry args={[1.85, 1.1, 0.02]} />
          <meshStandardMaterial {...materials.screen} />
        </mesh>
      </group>
    </group>
  );
};

export default Model;
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

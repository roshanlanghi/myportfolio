import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const modelRef = useRef();

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

  // ⚡ Only minimal animation (light performance)
  useFrame((state) => {
    if (!modelRef.current || document.hidden) return;

    const t = state.clock.getElapsedTime();
    // Slight idle rotation – very cheap animation
    modelRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
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

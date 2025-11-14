import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";

const Model = () => {
  const { scene } = useGLTF("/Lambo.glb");
  const modelRef = useRef();




  return (
    <a.primitive
      ref={modelRef}
      object={scene}
      position={[2, -0.1, 3]}
    />
  );
};

export default Model;

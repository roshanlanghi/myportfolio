// src/components/CameraController.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";

export default function CameraController({ activeSection }) {
  const camRef = useRef();

  // 🎥 Define camera positions for each section
  const positions = {
    home: [1, 1, -3],
    about: [3, 1, 6],
    work: [2.2, 1.2, 4],
    projects: [-2, 0, -1],
    testimonials: [-1, 0.5, 2.5],
    contact: [0.3, 4, -2],
  };

  // 🌀 Smooth transition with spring
  const { position } = useSpring({
    position: positions[activeSection] || positions.home,
    config: { tension: 80, friction: 16 },
  });

  useFrame(({ camera }) => {
    if (camRef.current) {
      const [x, y, z] = position.get();
      camera.position.lerp({ x, y, z }, 0.1);
      camera.lookAt(0, 0, 0);
    }
  });

  return <perspectiveCamera ref={camRef} makeDefault fov={50} />;
}

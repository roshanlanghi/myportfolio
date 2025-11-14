import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Text, Sparkles } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Model1 from "./components/Model.jsx";
import CameraController from "./components/CameraController.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

// 🌀 Animated Text Component (Floating + RGB)
const AnimatedText = () => {
  const textRef = useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    const r = Math.sin(t * 2) * 0.5 + 0.5;
    const g = Math.sin(t * 2 + 2) * 0.5 + 0.5;
    const b = Math.sin(t * 2 + 4) * 0.5 + 0.5;

    if (textRef.current) {
      textRef.current.position.y = 1.5 + Math.sin(t * 1.5) * 0.3;
      textRef.current.rotation.y = Math.sin(t * 0.4) * 0.4;
      textRef.current.lookAt(camera.position);
      textRef.current.color = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
      textRef.current.outlineColor = "#ffffff";

      const scale = 1 + Math.sin(t * 2) * 0.05;
      textRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
  <>
  
  </>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar onNavClick={setActiveSection} activeSection={activeSection} />
     
      {/* ✅ 3D Scene */}
      <Canvas
        shadows
        style={{ marginTop: "70px" }}
        camera={{ position: [6, 2, 8], fov: 50 }}
        gl={{ toneMappingExposure: 1.3 }}
      >
        <CameraController activeSection={activeSection} />

        {/* 🌌 Background & Fog */}
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 20]} />

        {/* 💡 Lighting */}
        <ambientLight intensity={2} color="#ffffff" />
        <pointLight position={[0, 3, 0]} intensity={2.5} color="#ffcc00" />
        <pointLight position={[3, 3, 3]} intensity={2} color="#00ffea" />
        <pointLight position={[-3, 3, -3]} intensity={2} color="#ff00ff" />
        <spotLight
          position={[0, 6, 5]}
          angle={0.5}
          intensity={3}
          penumbra={1}
          color="#ffcc00"
          castShadow
        />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00ffff" castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={2} color="#ff00ff" />
        <pointLight position={[0, 2, 5]} intensity={3.5} color="#ffffff" />

        {/* ✨ Sparkles */}
        <Sparkles
          count={200}
          scale={[10, 10, 10]}
          size={5}
          speed={0.4}
          color="#ffd700"
          opacity={0.7}
        />

        {/* 🌆 Environment */}
        <Environment preset="city" background={false} />
        <ContactShadows position={[0, -0.9, 0]} opacity={0.5} scale={10} blur={3} far={10} />

        {/* 🚗 Car Model */}
        <Model1 />

        {/* 🌀 Floating Animated Text */}
        <AnimatedText />
      </Canvas>

      {/* ✅ Animated Overlays */}
   <AnimatePresence mode="wait">
  {activeSection === "home" && (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Home onNavClick={setActiveSection} /> {/* ✅ now prop works properly */}
    </motion.div>
  )}

  {activeSection === "projects" && (
    <motion.div
      key="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Projects />
    </motion.div>
  )}

  {activeSection === "about" && (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <About />
    </motion.div>
  )}

  {activeSection === "contact" && (
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Contact />
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default App;

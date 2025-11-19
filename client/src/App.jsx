// src/App.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Sparkles } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Model1 from "./components/Model.jsx";
import CameraController from "./components/CameraController.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      console.log("Mobile detection →", mobile, "Width:", window.innerWidth);
      setIsMobile(mobile);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <>
      {/* Navbar always visible */}
      <Navbar onNavClick={setActiveSection} activeSection={activeSection} />

      {/* ⭐ MOBILE BACKGROUND */}
      {isMobile && <div className="mobile-bg">
         {/* ⭐ OVERLAY CONTENT */}
      <div className="overlay-content">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Home onNavClick={setActiveSection} />
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
      </div></div>}

      {/* ⭐ DESKTOP 3D CANVAS */}
      {!isMobile && (
        <Canvas
          className="canvas-blocker"
          shadows
          style={{ position: "fixed", inset: 0, zIndex: 0, marginTop: "70px" }}
          camera={{ position: [6, 2, 8], fov: 50 }}
          gl={{ toneMappingExposure: 1.3 }}
        >
          <CameraController activeSection={activeSection} />

          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 5, 20]} />

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

          <directionalLight
            position={[10, 10, 5]}
            intensity={2.5}
            color="#00ffff"
            castShadow
          />

          <Environment preset="city" background={false} />
          <ContactShadows
            position={[0, -0.9, 0]}
            opacity={0.5}
            scale={10}
            blur={3}
            far={10}
          />

          <Sparkles
            count={200}
            scale={[10, 10, 10]}
            size={5}
            speed={0.4}
            opacity={0.7}
          />

          <Model1 />
        </Canvas>
      )}

      {/* ⭐ OVERLAY CONTENT */}
      <div className="overlay-content">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Home onNavClick={setActiveSection} />
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
      </div>
    </>
  );
};

export default App;

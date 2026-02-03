import { useEffect, useState } from "react";
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
  const MotionDiv = motion.div;
  const motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const canvasStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    marginTop: "70px",
  };

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <>
      <Navbar onNavClick={setActiveSection} activeSection={activeSection} />

      {!isMobile && (
        <Canvas
          className="canvas-blocker"
          shadows
          style={canvasStyle}
          camera={{ position: [6, 2, 8], fov: 50 }}
          gl={{ toneMappingExposure: 1.3 }}
        >
          <CameraController activeSection={activeSection} />
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 5, 20]} />

          <ambientLight intensity={2} color="#ffffff" />
          <pointLight position={[0, 3, 0]} intensity={2.5} color="#ffcc00" />

          <Environment preset="city" background={false} />
          <ContactShadows
            position={[0, -0.9, 0]}
            opacity={0.5}
            scale={10}
            blur={3}
            far={10}
          />

          <Sparkles count={200} scale={[10, 10, 10]} size={5} speed={0.4} />

          <Model1 />
        </Canvas>
      )}

      {isMobile && (
        <img
          src="/images/mobile.jpg"
          alt="Mobile Background"
          className="mobile-bg"
        />
      )}

      <div className="overlay-content">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <MotionDiv key="home" {...motionProps}>
              <Home onNavClick={setActiveSection} />
            </MotionDiv>
          )}

          {activeSection === "projects" && (
            <MotionDiv key="projects" {...motionProps}>
              <Projects />
            </MotionDiv>
          )}

          {activeSection === "about" && (
            <MotionDiv key="about" {...motionProps}>
              <About />
            </MotionDiv>
          )}

          {activeSection === "contact" && (
            <MotionDiv key="contact" {...motionProps}>
              <Contact />
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;

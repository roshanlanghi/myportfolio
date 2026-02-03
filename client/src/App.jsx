import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Sparkles } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";

const About = React.lazy(() => import("./components/About.jsx"));
const Model1 = React.lazy(() => import("./components/Model.jsx"));
const CameraController = React.lazy(() =>
  import("./components/CameraController.jsx")
);
const Home = React.lazy(() => import("./components/Home.jsx"));
const Contact = React.lazy(() => import("./components/Contact.jsx"));
const Projects = React.lazy(() => import("./components/Projects.jsx"));

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [show3D, setShow3D] = useState(false);
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

  useEffect(() => {
    const showScene = () => setShow3D(true);
    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(showScene);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(showScene, 200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Navbar onNavClick={setActiveSection} activeSection={activeSection} />

      {!isMobile && show3D && (
        <Canvas
          className="canvas-blocker"
          shadows
          style={canvasStyle}
          camera={{ position: [6, 2, 8], fov: 50 }}
          gl={{ toneMappingExposure: 1.3 }}
        >
          <Suspense fallback={null}>
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
          </Suspense>
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
        <Suspense fallback={null}>
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
        </Suspense>
      </div>
    </>
  );
};

export default App;

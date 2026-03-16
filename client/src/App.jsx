import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Sparkles } from "@react-three/drei";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Model1 from "./components/Model.jsx";
import CameraController from "./components/CameraController.jsx";
import "./App.css";

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
  const sections = useMemo(
    () => ["home", "about", "work", "projects", "testimonials", "contact"],
    []
  );
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

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section))
      .filter(Boolean);

    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  const handleNavClick = (section) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(section);
    }
  };

  return (
    <div className="app">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      <div className="background-waves" aria-hidden="true" />

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

      <main className="page-content">
        <section id="home" className="section section-hero">
          <Home onNavClick={handleNavClick} />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="work" className="section">
          <Work />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="testimonials" className="section">
          <Testimonials />
        </section>
        <section id="contact" className="section section-contact">
          <Contact />
        </section>
      </main>
    </div>
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

import { useEffect } from "react";
import gsap from "gsap";
import Galaxy from "../components/Galaxy";

const About = () => {

  useEffect(() => {
    // Intro text animation
    gsap.fromTo(".fade-up",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">

      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 -z-1 pointer-events-none">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* 🧠 MAIN CONTAINER */}
      <div className="relative z-10 px-6 md:px-16 py-32 flex flex-col items-center gap-28">

        {/* ⚡ HERO STATEMENT */}
        <section className="text-center max-w-4xl">
          <h1 className="cursor-scale fade-up text-4xl md:text-6xl font-light tracking-[0.3em] leading-tight">
            VORXEN IS NOT A COMPANY
          </h1>
          <h2 className="cursor-scale fade-up text-3xl md:text-5xl mt-6 text-white tracking-[0.4em]">
            IT IS A SYSTEM
          </h2>
        </section>

        {/* 🤖 CORE MODULES */}
        <section className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">

          <InfoCard title="CORE" desc="Artificial Intelligence Systems" />
          <InfoCard title="FOCUS" desc="Robotics + Automation" />
          <InfoCard title="MISSION" desc="Human × Machine Evolution" />

        </section>

        {/* 🧬 TIMELINE */}
        <section className="w-full max-w-4xl flex flex-col gap-6 text-center">

          <h3 className="fade-up text-xl tracking-[0.5em] text-white">
            SYSTEM EVOLUTION
          </h3>

          <TimelineItem year="2024" text="Concept Initialized" />
          <TimelineItem year="2025" text="AI Systems Developed" />
          <TimelineItem year="2026" text="Robotics Integration" />
          <TimelineItem year="∞" text="Autonomous Intelligence" />

        </section>

        {/* 🧠 FINAL STATEMENT */}
        <section className="text-center mt-20">
          <h2 className="fade-up text-2xl md:text-4xl tracking-[0.4em] text-white">
            THE SYSTEM IS LEARNING
          </h2>
        </section>

      </div>
    </div>
  );
};

export default About;





/* 🔹 INFO CARD COMPONENT */
const InfoCard = ({ title, desc }) => {
  return (
    <div className="fade-up group relative border border-cyan-400/20 rounded-xl p-6 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300">

      <h4 className="text-sm tracking-[0.4em] text-white mb-4">
        {title}
      </h4>

      <p className="text-lg text-white/80">
        {desc}
      </p>

      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/10 blur-xl transition-all duration-500"></div>
    </div>
  );
};



/* 🔹 TIMELINE ITEM */
const TimelineItem = ({ year, text }) => {
  return (
    <div className="fade-up flex justify-between border-b border-white/10 pb-3 text-white/80">

      <span className="tracking-widest text-white">
        {year}
      </span>

      <span>{text}</span>

    </div>
  );
};
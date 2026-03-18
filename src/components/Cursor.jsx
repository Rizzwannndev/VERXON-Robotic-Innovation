import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    // Smooth trailing loop
    const animate = () => {
      if (cursor) {
        gsap.to(cursor, {
          x: mouseX,
          y: mouseY,
          duration: 0.15,
          ease: "power2.out",
        });
      }
      animationFrame.current = requestAnimationFrame(animate);
    };
    animate();

    // Hover effects
    const addHover = () =>
      gsap.to(cursor, {
        scale: 5,
        backgroundColor: "white",
        duration: 0.2,
      });

    const removeHover = () =>
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        duration: 0.2,
      });

    // Wait until elements exist
    const setHoverListeners = () => {
      const hoverEls = document.querySelectorAll(".main-head");
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return () => {
        hoverEls.forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      };
    };

    const cleanupHover = setHoverListeners();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      cleanupHover && cleanupHover();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "white",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default Cursor;
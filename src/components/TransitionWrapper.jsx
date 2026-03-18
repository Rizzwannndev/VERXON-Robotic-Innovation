import gsap from "gsap";
import { createContext, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

const TransitionWrapper = ({ children }) => {
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const startTransition = (to) => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate(to);
        enterAnimation();
      },
    });

    // fade in
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
    });
  };

  const enterAnimation = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      
      {/* Fade Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 pointer-events-none z-[999] bg-black opacity-0"
      />

      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionWrapper;
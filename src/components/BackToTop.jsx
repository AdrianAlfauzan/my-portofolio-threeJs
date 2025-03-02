import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowButton(latest > 0.05);
    });

    return () => unsubscribe(); // Pastikan untuk membersihkan listener saat komponen unmount
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="hover:cursor-pointer  fixed bottom-8 right-8 bg-transparent text-yellow-400 p-3 rounded-full shadow-lg transition-colors z-[150] 
          flex items-center justify-center"
          aria-label="Scroll to top"
          style={{ width: "50px", height: "50px" }}
        >
          <motion.div className="absolute inset-0" style={{ transform: "rotate(-90deg)" }}>
            <svg width={50} height={50} viewBox="0 0 36 36">
              <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00d2ff" strokeWidth={2} />
              <motion.path
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="black"
                strokeWidth={2}
                strokeDasharray="100 100"
                strokeDashoffset="100"
                style={{
                  pathLength: scrollYProgress,
                }}
              />
            </svg>
          </motion.div>
          <span className="text-xl relative z-[150]">
            <ChevronUp />
          </span>
        </button>
      )}
    </>
  );
}

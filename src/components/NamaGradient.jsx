import { useState, useEffect, useMemo } from "react";

const NamaGradient = () => {
  const texts = useMemo(
    () => [
      "Adrian Musa Alfauzan",
      "Fullstack Developer",
      "Problem Solver",
      "Programmer Life", //
    ],
    []
  );
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    const text = texts[textIndex];
    if (index < text.length && !removing) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 75);
      return () => clearTimeout(timeout);
    }

    if (index === text.length) {
      setTimeout(() => setRemoving(true), 500);
    }

    if (removing && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, 75);
      return () => clearTimeout(timeout);
    }

    if (removing && index === 0) {
      setTimeout(() => {
        setRemoving(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIndex(0);
      }, 500);
    }
  }, [index, removing, textIndex, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
      {displayedText}
      {/* Adrian Musa Alfauzan */}
    </span>
  );
};

export default NamaGradient;

import { useState, useEffect, useMemo } from "react";

const NamaGradient = () => {
  const texts = useMemo(() => ["Adrian Musa Alfauzan", "Fullstack Developer", "Problem Solver", "Programmer Life"], []);

  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true); // untuk kontrol fade in/out

  useEffect(() => {
    // Atur interval untuk fade out, ganti teks, lalu fade in
    const fadeOutDuration = 500; // ms
    const displayDuration = 2000; // ms tampil penuh sebelum fade out

    const timeout1 = setTimeout(() => {
      setVisible(false); // mulai fade out
    }, displayDuration);

    const timeout2 = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setVisible(true); // fade in teks baru
    }, displayDuration + fadeOutDuration);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [textIndex, texts.length]);

  return <span className={`text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>{texts[textIndex]}</span>;
};

export default NamaGradient;

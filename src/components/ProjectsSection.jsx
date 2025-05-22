import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { projects } from "./data/config";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  // Warna untuk setiap kelompok 5 gambar
  const colors = ["bg-yellow-400", "bg-blue-400", "bg-green-400", "bg-red-400", "bg-purple-400"];

  // Hitung kelompok keberapa berdasarkan indeks
  const currentGroup = Math.floor(currentIndex / 5) % colors.length;

  // Ambil hanya 5 item dari daftar berdasarkan kelompok
  const maxDots = 5;
  const startIdx = Math.floor(currentIndex / maxDots) * maxDots;
  const visibleDots = projects.slice(startIdx, startIdx + maxDots);

  // Auto-scroll setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Fungsi next & prev
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  // Handle geser layar (swipe)
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextSlide(); // Geser kiri → next
    if (touchStartX - touchEndX < -50) prevSlide(); // Geser kanan → prev
    setTouchStartX(null);
  };

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle title="My Work" />
      </header>

      <article className="relative w-full h-screen flex my-28 justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <AnimatePresence initial={false} custom={currentIndex}>
          {projects.map(
            (project, index) =>
              index === currentIndex && (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -100 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className="absolute w-[90%] h-auto md:w-[80%] md:h-full p-4 md:p-6 border border-[#00bfff] bg-[#ffffff29] rounded-3xl text-white"
                >
                  <div className="relative w-full aspect-[16/9] md:h-[700px] rounded-t-lg overflow-hidden mb-4">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4">
                      <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-500">{project.title}</h2>
                      <p className="text-sm mt-2 text-white">{project.description}</p>
                    </div>
                  </div>

                  {/* 🔵 Indikator titik untuk mobile */}
                  <div className="flex justify-center mt-4 md:hidden">
                    {visibleDots.map((_, idx) => {
                      const actualIdx = startIdx + idx; // Indeks asli dalam array
                      return <span key={actualIdx} className={`w-3 h-3 mx-1 rounded-full transition-all ${actualIdx === currentIndex ? `${colors[currentGroup]} scale-110` : "bg-gray-500 opacity-50"}`}></span>;
                    })}
                  </div>
                </motion.article>
              )
          )}
        </AnimatePresence>

        {/* 🔥 Chevron hanya muncul di layar besar */}
        <button
          onClick={prevSlide}
          className="absolute hover:cursor-pointer left-4 top-2/4 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 hidden md:flex items-center justify-center"
        >
          <ChevronLeft size={40} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute hover:cursor-pointer right-4 top-2/4 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 hidden md:flex items-center justify-center"
        >
          <ChevronRight size={40} className="text-white" />
        </button>
      </article>
    </>
  );
}

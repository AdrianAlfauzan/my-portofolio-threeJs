import { motion } from "framer-motion";

export default function Footer() {
  const sentence = "All rights reserved.";
  const letters = sentence.split("");

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative z-10 text-white border-t-2 border-white mt-20">
      <div className="container p-8 flex justify-between ">
        <img src="/CodingNGamer.webp" alt="" className="w-12 h-12 rounded-full flex" />
        <nav className="flex ml-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index} //
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`inline-block ${letter === " " ? "mr-4" : "mr-1"}`}
            >
              {letter}
            </motion.span>
          ))}
        </nav>
      </div>
    </footer>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { variants } from "./data/config";
import InteractiveButton from "./InteractiveButton";
import SocialButton from "./SocialButton";

function HeroSection() {
  return (
    <section className=" relative w-full">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
      <section className="w-full px-5  sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto ">
          <section className="lg:py-6 flex justify-between">
            <SocialButton />
            <section className="ml-0 md:ml-12">
              <header className="text-center lg:text-left">
                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  Hi I'm
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500"> Adrian Musa Alfauzan</span>
                </h1>
              </header>
              <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem corrupti ex, fuga obcaecati unde corporis sequi illo nemo optio omnis quisquam possimus quod amet iusto aliquam deserunt numquam asperiores?
              </p>
              <section className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                <figure className="w-56 ">
                  <InteractiveButton text="Hire Me" />
                </figure>
                <motion.button whileHover={{ scale: 1.1 }} className="flex items-center px-4 py-2 bg-transparent text-yellow-400 border border-yellow-400 rounded-3xl">
                  <svg viewBox="0 0 24 24" width={40} height={40} fill="none" stroke="currentColor" strokeWidth={0.3}>
                    <motion.path d="M12 15.5l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05 12 15.5zM5 17h14v2H5v-2z" fill="yellow" stroke="yellow" variants={variants} initial="initial" animate="animate" />
                  </svg>
                  <span className="ml-2">Download Resume</span>
                </motion.button>
              </section>
            </section>
          </section>
          <figure className="lg:h-full md:flex md:justify-end mt-20 md:mt-0">
            <motion.div
              className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex justify-center items-center p-3 rounded-full overflow-hidden relative"
              animate={{
                backgroundColor: ["#FFC107", "#FF7556", "#FF6667"],
                scale: [1, 1.1, 1],
                rotate: [1, 5, 5, 1],
              }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ff6667] blur-3xl opacity-60 h-full w-full" />
              <img src="/CodingNGamer.webp" alt="Hero Pic" className="relative z-10 rounded-full max-h-full shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110" />
            </motion.div>
          </figure>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;

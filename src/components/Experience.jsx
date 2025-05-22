import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { useRef, useState } from "react";
import { experience } from "./data/config";

const SectionItem = ({ title, subtitle, year, details, icon: Icon, link }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const [isMobileOverlayVisible, setIsMobileOverlayVisible] = useState(false);

  const handleToggleOverlay = () => {
    // Hanya aktif di layar kecil (mobile)
    if (window.innerWidth <= 768) {
      setIsMobileOverlayVisible((prev) => !prev);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative group flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer 
             before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br 
             before:from-yellow-400 before:to-red-400 before:z-[-10] 
             after:absolute after:indent-0 after:bg-gradient-to-br after:from-red-400 
             after:to-yellow-400 after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] 
             mt-10 h-full w-full overflow-hidden"
      initial={{ opacity: 0, y: 400 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      style={{ opacity }}
      onClick={handleToggleOverlay}
    >
      <section className="relative bg-black z-20 text-white rounded-xl h-full w-full overflow-hidden">
        {/* Overlay untuk desktop hover dan mobile click */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg
             backdrop-blur-sm rounded-xl z-30
             transform transition-transform duration-500 ease-in-out
             ${isMobileOverlayVisible ? "translate-y-0" : "-translate-y-full"} group-hover:translate-y-0`}
          onClick={(e) => e.stopPropagation()} // supaya klik link gak toggle overlay lagi
        >
          🔗 Lihat Proyek
        </a>

        <section className="border border-[#00bfff] bg-[#ffffff29] rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left gap-4 h-full w-full">
          <img src={Icon} alt="icon" width={64} height={64} />
          <div className="ml-0 md:ml-10 w-full flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{subtitle}</p>
            <p className="text-sm italic">{year}</p>
            {details && <p className="mt-2">{details}</p>}
          </div>
        </section>
      </section>
    </motion.div>
  );
};

export default function EducationAndExpression() {
  return (
    <section className="relative container mx-auto px-4 py-12 lg:p-16" id="experience">
      <CustomTitle title="Education & Experience" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
        {experience.map((edu) => (
          <SectionItem
            key={edu.id} //
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
            link={edu.link}
          />
        ))}
      </section>
    </section>
  );
}

SectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  details: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
};

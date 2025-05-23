import { motion } from "framer-motion";
import { socialIcons } from "./data/config";

export default function SocialButton() {
  const animationDuration = 4;
  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
        strokeOpacity: { delay: animationDuration },
        fillOpacity: { delay: animationDuration },
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const blueShades = ["#1E90FF", "#007BFF", "#0D6EFD", "#6495ED"];

  return (
    <div className="flex md:flex-col items-center justify-center border border-white bg-[#ffffff29] rounded-3xl space-x-6 md:space-x-0 md:space-y-11 p-3 max-h-[600px] md:max-h-[500px] ">
      {socialIcons.map((icon, index) => (
        <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }} aria-label={`Link to social media id ${icon.id}`}>
          <motion.svg viewBox={icon.viewBox} width={40} height={40} initial="initial" animate="animate" whileHover="hover">
            <motion.path d={icon.path} fill={blueShades[index % blueShades.length]} stroke={blueShades[index % blueShades.length]} strokeWidth={1} variants={variants} />
          </motion.svg>
        </a>
      ))}
    </div>
  );
}

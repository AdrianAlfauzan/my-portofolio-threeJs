import PropTypes from "prop-types";

import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { skills } from "./data/config";

const SkillCircle = ({ skill, percentage, icon }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.article
      initial={{ opacity: 0 }} //
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center "
    >
      <svg width={120} height={120} className="rotate-[-90deg]">
        <circle cx={60} cy={60} r={radius} fill="#transparent" stroke="#ffffff29" strokeWidth={10} />
        <motion.circle
          cx={60}
          cy={60} //
          r={radius}
          fill="transparent"
          stroke="#FFC107"
          strokeWidth={10}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.circle>
      </svg>
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={icon} alt={skill} className="w-10 h-10 mb-1" />
        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-500">{percentage}%</p>
      </div>
    </motion.article>
  );
};

export default function SkillsSection() {
  return (
    <section className="relative" id="skills">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
      <CustomTitle title="My Skills" />
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 p-16 text-white mt-32">
        {skills.map((item, index) => (
          <motion.article
            key={index} //
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <SkillCircle
              skill={item.skill} //
              percentage={item.percentage}
              icon={item.icon}
            />
          </motion.article>
        ))}
      </section>
    </section>
  );
}

SkillCircle.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired, // URL atau path icon dalam bentuk string
};

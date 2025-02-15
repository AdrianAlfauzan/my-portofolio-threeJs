import PropTypes from "prop-types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CustomTitle({ title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });
  return (
    <motion.h1
      ref={ref}
      initial={{ y: "150%" }} //
      animate={isInView ? { y: 0 } : {}}
      transition={{ ease: [0.42, 0, 0.58, 1], duration: 1 }}
      className=" font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center mt-28 "
    >
      {title}
    </motion.h1>
  );
}

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

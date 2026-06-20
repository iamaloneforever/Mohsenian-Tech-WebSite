"use client";

import { motion } from "motion/react";

const SvgComponent = (props: any) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={900}
      height={600}
      viewBox="0 0 900 600"
      initial="hidden"
      animate="show"
      {...props}
    >
      {/* Background */}
      <motion.path
        d="M0 0h900v600H0z"
        fill="#001220"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Wave shape */}
      <motion.path
        fill="#ce9137"
        d="M900 243.4c-27.9-8-55.7-15.9-90.7-24.4-35-8.6-77-17.7-81.4-46.9-4.4-29.2 29-78.5 23.4-110.5-5.6-32-50.2-46.8-94.7-61.6H900ZM0 356.6c24.7 20.8 49.4 41.5 80 50.3 30.6 8.8 67 5.7 92.1 21 25.1 15.3 38.7 48.9 48.7 80.6 10 31.8 16.3 61.6 22.6 91.5H0Z"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.2,
        }}
      />
    </motion.svg>
  );
};

export default SvgComponent;

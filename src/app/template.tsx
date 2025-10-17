"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <motion.div
      key={path}
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={{ type: "tween", duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      {children}
    </motion.div>
  );
}

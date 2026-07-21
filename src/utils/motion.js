import { motion } from "framer-motion";

export const fadeIn = (
  direction = "up",
  type = "spring",
  delay = 0,
  duration = 0.75
) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

export const textVariant = () => ({
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
});
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const slideDown = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" }
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export const glowEffect = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(212, 175, 55, 0.3)",
      "0 0 30px rgba(212, 175, 55, 0.6)",
      "0 0 20px rgba(212, 175, 55, 0.3)"
    ]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

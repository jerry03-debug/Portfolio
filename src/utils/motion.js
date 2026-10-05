// Courbe d'easing commune : ease-out appuyé, pour un arrêt doux (effet "smooth").
const SMOOTH = [0.22, 1, 0.36, 1];

export const textVariant = (delay) => {
    return {
      hidden: {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
      },
      show: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          type: "tween",
          duration: 1,
          delay: delay,
          ease: SMOOTH,
        },
      },
    };
  };

  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        // Direction vide ("") : on monte quand même depuis le bas par défaut.
        y: direction === "down" ? -100 : direction === "up" ? 100 : 60,
        opacity: 0,
        filter: "blur(12px)",
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          type: type || "tween",
          delay: delay,
          duration: duration || 1,
          ease: SMOOTH,
        },
      },
    };
  };

  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
        filter: "blur(12px)",
      },
      show: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: SMOOTH,
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        filter: "blur(12px)",
      },
      show: {
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transition: {
          type: type || "tween",
          delay: delay,
          duration: duration || 1,
          ease: SMOOTH,
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
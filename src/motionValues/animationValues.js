export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

export const staggerFade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.4,
    },
  },
};
export const staggerFade02 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

export const textColor = {
  hidden: {
    color: "#fcb913",
    backgroundColor: "rgba(252,245,223,.95)",
  },
  visible: {
    color: "rgba(252,245,223,.95)",
    backgroundColor: "#fcb913",
    transition: {
      delay: 4,
    },
  },
};

export const cardAnimate = {
  initial: {
    opacity: 0, y: -30,
  },
  animate: {
    opacity: 1, y: 0,
  },
  transaction: { duration: 1.5 }
}

export const avatarAnimate = (offset: number) => {
  return {
    initial: {
      x: 0
    },
    animate: {
      x: offset
    },
    transition: { delay: 3, duration: 1 }
  }
}


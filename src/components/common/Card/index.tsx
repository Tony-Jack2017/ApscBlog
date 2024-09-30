import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";
import { motion } from "framer-motion";
import {cardAnimate} from "@/common/animation";

interface CardItf {
  isPure?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const Card: React.FC<CardItf> = (props) => {

  const {
    isPure = true,
    className, style,
    children
  } = props

  const innerClass = classNames([
    "card-box",
    { "card-box-isPure": isPure },
    className
  ])

  const innerStyle = {
    ...style
  }

  return (
    <motion.div initial={cardAnimate.initial}
                animate={cardAnimate.animate}
                transition={cardAnimate.transaction}
                className={innerClass} style={innerStyle}>
      {children}
    </motion.div>
  );
};

export default Card;
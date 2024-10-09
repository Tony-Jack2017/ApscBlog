import React, {CSSProperties} from 'react';
import {motion} from "framer-motion";

interface CircleItf {
  className?: string
  style?: CSSProperties
}

const CusTextCircle: React.FC<CircleItf> = () => {


  return (
    <motion.svg
      className="cus-circle-text"
      animate={{rotate: 360}}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }}
      viewBox="0 0 100 100" overflow="visible">
      <path id="curve-wnxkz4" d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
            strokeWidth="none" fill="transparent">
      </path>
      <text>
        <textPath href="#curve-wnxkz4" startOffset="0" dominantBaseline="Hanging" fill="white" style={{ letterSpacing: 8, fontSize: 14 }}>
          SCROLL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOWN
        </textPath>
      </text>
    </motion.svg>
  );
};

export default CusTextCircle;
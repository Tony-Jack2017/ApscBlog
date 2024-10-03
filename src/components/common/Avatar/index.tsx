import {CSSProperties, forwardRef} from 'react';
import classNames from "classnames";
import {motion} from "framer-motion";
import {computeSize} from "./tools";

interface AvatarItf {
  shape?: "circle" | "square" | "normal"
  size?: "default" | "small" | "large" | "auto" | [number, number]
  border?: boolean
  src?: string
  className?: string
  style?: CSSProperties
}

const Avatar = forwardRef<HTMLDivElement, AvatarItf>((props, ref) => {

  const {
    shape = "normal",
    size = "default",
    border = false,
    src,
    className, style
  } = props

  const innerClass = classNames([
    "avatar",
    `avatar-shape-${shape}`,
    className
  ])

  const innerStyle = Object.assign(
    size === "auto" ? {} : computeSize(size),
    border ? { border: "2px solid #ffffff" } : {},
    style
  )

  return (
    <div ref={ref} className={innerClass} style={innerStyle}>
      <img src={src}  alt="avatar"/>
    </div>
  );
});

export default motion.create(Avatar);

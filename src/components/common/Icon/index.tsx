import {CSSProperties, forwardRef} from 'react';
import classNames from "classnames";
import {motion} from "framer-motion";

interface IconItf {
  isPure?: boolean
  isAction?: boolean
  shape?: "circle" | "square"
  icon: string
  size?: number | string | "normal" | "small" | "large"
  color?: CSSProperties["color"]
  className?: string
  style?: CSSProperties
}

function computeSize(size: IconItf["size"]) {
  switch (size) {
    case "normal":
      return "18px"
    case "small":
      return "14px"
    case "large":
      return "24px"
    default:
      return size
  }
}

const Icon= forwardRef<HTMLDivElement, IconItf>((props, ref) => {

  const {
    isPure = false,isAction = false,
    shape = "circle", icon, size = "normal",color = "black",
    className, style
  } = props

  const innerStyle = Object.assign(isAction ? { cursor: "pointer" } as CSSProperties : {}, style)

  const iconStyle = {
    fontSize: computeSize(size),
    color: color
  }

  const innerClass = classNames([
    "iconfont",
    "iconfont-default",
    `iconfont-shape-${shape}`,
    className
  ])

  const iconClass = classNames([
    "bx",
    icon
  ])

  return (
    <div ref={ref} className={ isPure ? "iconfont-default" : innerClass} style={innerStyle}>
      <i className={iconClass} style={iconStyle}></i>
    </div>
  );
});

export default motion.create(Icon);

import {CSSProperties, forwardRef} from "react";
import classNames from "classnames";
import {motion} from "framer-motion";

interface TextItf {
  className?: string
  style?: CSSProperties
  isGradient?: boolean
  children: string
}

const CusText = forwardRef<HTMLSpanElement, TextItf>((props, ref) => {

  const {
    isGradient,
    className, style,
    children
  } = props

  const innerClass = classNames([
    "cus-text",
    {"cus-text-gradient": isGradient },
    className
  ])

  const innerStyle = Object.assign({},
    style ? style : null
  ) as CSSProperties


  return (
    <motion.span
      ref={ref}
      className={innerClass}
      style={innerStyle}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      {children}
    </motion.span>
  )
})

export default CusText

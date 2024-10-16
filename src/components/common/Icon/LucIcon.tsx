import {CSSProperties, forwardRef} from 'react';
import { icons } from 'lucide-react';
import {motion} from "framer-motion";
import classNames from "classnames";

interface LucIconItf {
   name: string
   color?: CSSProperties["color"]
   size?: CSSProperties["fontSize"]
   className?: string
   style?: CSSProperties
}


const LucIcon = forwardRef<HTMLDivElement, LucIconItf>((props, ref) => {
  const {
    name, color, size ,
    className, style
  } = props
  const LucideIcon = icons[name as keyof typeof icons];

  const innerClass = classNames([
    "luc-icon",
    className
  ])

  const innerStyle = Object.assign({}, style)

  return (
    <div ref={ref} className={innerClass} style={innerStyle}>
      <LucideIcon color={color} size={size} />
    </div>
  )
})

export default motion.create(LucIcon);

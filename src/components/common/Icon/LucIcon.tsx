import {CSSProperties, forwardRef} from 'react';
import { icons } from 'lucide-react';
import {motion} from "framer-motion";

interface LucIconItf {
   name: string
   color?: CSSProperties["color"]
   size?: CSSProperties["fontSize"]
   className?: string
   style?: CSSProperties
}


const LucIcon = forwardRef<HTMLDivElement, LucIconItf>((props, ref) => {
  const { name, color, size } = props
  const LucideIcon = icons[name as keyof typeof icons];
  return (
    <div ref={ref}>
      <LucideIcon color={color} size={size} />
    </div>
  )
})

export default motion.create(LucIcon);
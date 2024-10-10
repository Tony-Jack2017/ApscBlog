import {CSSProperties, FC} from 'react';
import { icons } from 'lucide-react';

interface LucIconItf {
   name: string
   color?: CSSProperties["color"]
   size?: CSSProperties["fontSize"]
   className?: string
   style?: CSSProperties
}


const LucIcon:FC<LucIconItf> = (props) => {
  const { name, color, size } = props
  const LucideIcon = icons[name as keyof typeof icons];
  return (
    <LucideIcon color={color} size={size} />
  )
}

export default LucIcon;
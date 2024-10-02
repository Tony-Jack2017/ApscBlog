import React, {CSSProperties, useRef} from 'react';
import Avatar from "@/components/common/Avatar/index.tsx";
import classNames from "classnames";

interface AvatarGroupItf {
  size?: "default" | "small" | "large" | number | string
  offset?: string | number
  list: string[]
  className?: string
  style?: CSSProperties
}

const AvatarGroup: React.FC<AvatarGroupItf> = (props) => {

  const {
    list,
    size = "default",
    className, style
  } = props

  const baseRef = useRef<HTMLDivElement | null>(null)

  const innerClass = classNames([
    "avatar-group",
    className
  ])

  const innerStyle = {
    ...style
  }

  return (
    <div className={innerClass} style={innerStyle}>
      {
        list.map((item, index) => (
          <Avatar ref={(el: HTMLDivElement) => { index == 0 ? baseRef.current = el ? "" } } key={index} src={item} shape="square" />
        ))
      }
    </div>
  );
};

export default AvatarGroup;
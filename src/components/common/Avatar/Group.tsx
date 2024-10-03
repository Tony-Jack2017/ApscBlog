import React, {CSSProperties, useRef} from 'react';
import Avatar from "@/components/common/Avatar/index.tsx";
import classNames from "classnames";
import {computeSize} from "@/components/common/Avatar/tools";
import {AnimatePresence} from "framer-motion";
import {avatarAnimate} from "@/common/animation";

interface AvatarGroupItf {
  size?: "default" | "small" | "large" | "auto" | [number, number]
  offset?: number
  list: string[]
  className?: string
  style?: CSSProperties
}

const AvatarGroup: React.FC<AvatarGroupItf> = (props) => {

  const {
    list,
    size = "default",
    offset= 12,
    className, style
  } = props

  const baseRef = useRef<HTMLDivElement | null>(null)

  const innerClass = classNames([
    "avatar-group",
    className
  ])

  const innerStyle = {
    width: (offset* (list.length - 1)) + Number(computeSize(size).width),
    height: computeSize(size).height,
    ...style
  }

  return (
    <div className={innerClass} style={innerStyle}>
      <AnimatePresence>
        {
          list.map((item, index) => (
            <Avatar
              {...avatarAnimate(offset * index)}
              key={index}
              ref={(el: HTMLDivElement) => {
                index == 0 ? baseRef.current = el : ""
              }}
              border={true}
              size={size}
              src={item}
              shape="circle"/>
          ))
        }
      </AnimatePresence>
    </div>
  );
};

export default AvatarGroup;

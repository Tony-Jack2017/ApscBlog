import React, {CSSProperties} from 'react';
import classNames from "classnames";

interface AvatarItf {
  shape?: "circle" | "square" | "custom" | "default"
  cusWid?: CSSProperties["width"]
  cusHei?: CSSProperties["height"]
  src?: string
  className?: string
  style?: CSSProperties
}

const Avatar: React.FC<AvatarItf> = (props) => {

  const {
    src, shape = "default",cusWid, cusHei ,
    className, style
  } = props

  const innerClass = classNames([
    "avatar",
    `avatar-shape-${shape}`,
    className
  ])

  const innerStyle = Object.assign(
    shape === "custom" ? { width: cusWid, height: cusHei  } : {},
    style
  )

  return (
    <div className={innerClass} style={innerStyle}>
      <img src={src}  alt="avatar"/>
    </div>
  );
};

export default Avatar;
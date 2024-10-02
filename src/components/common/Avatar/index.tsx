import React, {CSSProperties} from 'react';
import classNames from "classnames";

interface AvatarItf {
  shape?: "circle" | "square" | "normal"
  size?: "default" | "custom" | "small" | "large"
  cusWid?: CSSProperties["width"]
  cusHei?: CSSProperties["height"]
  src?: string
  className?: string
  style?: CSSProperties
}

const Avatar: React.FC<AvatarItf> = (props) => {

  const {
    shape = "normal",
    size = "default",
    cusWid,
    cusHei ,
    src,
    className, style
  } = props

  const innerClass = classNames([
    "avatar",
    `avatar-shape-${shape}`,
    className
  ])

  const innerStyle = Object.assign(
    size === "custom" ? { width: cusWid, height: cusHei  } : {},
    style
  )

  return (
    <div className={innerClass} style={innerStyle}>
      <img src={src}  alt="avatar"/>
    </div>
  );
};

export default Avatar;
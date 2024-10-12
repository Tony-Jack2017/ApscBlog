import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";

interface ComContainerItf {
  isFull?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const ComContainer: React.FC<ComContainerItf> = (props) => {
  const {
    isFull = false,
    className, style,
    children
  } = props

  const innerClass = classNames([
    "com-container",
    { "container-full": isFull },
    className
  ])

  const innerStyle = Object.assign({}, style)

  return (
    <div className={innerClass} style={innerStyle}>
      { children }
    </div>
  );
};

export default ComContainer;
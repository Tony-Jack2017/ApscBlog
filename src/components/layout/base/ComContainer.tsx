import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";

interface ComContainerItf {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const ComContainer: React.FC<ComContainerItf> = (props) => {

  const {
    className, style,
    children
  } = props

  const innerClass = classNames([
    "com-container",
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
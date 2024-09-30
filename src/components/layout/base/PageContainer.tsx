import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";

interface PageContainerItf {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const PageContainer: React.FC<PageContainerItf> = (props) => {

  const {
    className, style,
    children
  } = props

  const innerClass = classNames([
    "page",
    className
  ])

  const innerStyle = {
    ...style,
  }

  return (
    <div className={innerClass} style={innerStyle}>
      {children}
    </div>
  );
};

export default PageContainer;
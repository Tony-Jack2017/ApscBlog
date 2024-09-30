import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";

interface SectionContainerItf {
  isSticky?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const SectionContainer: React.FC<SectionContainerItf> = (props) => {

  const {
    isSticky,
    className, style,
    children
  } = props

  const innerClass = classNames([
    "section",
    className
  ])

  const innerStyle = {
    ...style,
    position: isSticky ? "sticky" : "static",
  } as CSSProperties

  return (
    <section className={innerClass} style={innerStyle}>
      {children}
    </section>
  );
};

export default SectionContainer;
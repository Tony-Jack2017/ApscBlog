import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";

interface SectionContainerItf {
  isSticky?: boolean
  id?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const SectionContainer: React.FC<SectionContainerItf> = (props) => {

  const {
    isSticky,
    id, className, style,
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
    <section id={id} className={innerClass} style={innerStyle}>
      {children}
    </section>
  );
};

export default SectionContainer;
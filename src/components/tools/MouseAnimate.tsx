import React, {CSSProperties} from 'react';
import classNames from "classnames";

interface MouseAnimateItf {
  // 在这里定义你的 props
  className?: string
  style?: CSSProperties
}

const MouseAnimate: React.FC<MouseAnimateItf> = (props) => {

  const {className, style} = props

    const innerClass = classNames([
      "mouse-icon",
        className
    ])

    const innerStyle = Object.assign({}, style)

  return (
    <div className={innerClass} style={innerStyle}>
        <div className="mouse"></div>
      <div>
        <span className="arrow arrow-01"></span>
        <span className="arrow arrow-02"></span>
        <span className="arrow arrow-03"></span>
      </div>
    </div>
  );
};

export default MouseAnimate;
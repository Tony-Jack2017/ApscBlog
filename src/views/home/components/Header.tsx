import React, {CSSProperties} from 'react';
import classNames from "classnames";

interface HeaderItf {
  style?: CSSProperties
}

const Header: React.FC<HeaderItf> = (props) => {

  const {style} = props

  const innerClass = classNames(
    "header"
  )

  const innerStyle = {
    ...style,
  }

  return (
    <header className={innerClass} style={innerStyle}>
      {/* 其他组件内容 */}
    </header>
  );
};

export default Header;
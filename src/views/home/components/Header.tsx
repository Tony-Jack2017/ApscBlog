import React, {CSSProperties} from 'react';
import classNames from "classnames";

import LogoBrand from "@/assets/img/common/logo/logo-brand.png"
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import NavBar from "@/components/custom/NavBar";

interface HeaderItf {
  style?: CSSProperties
}

const navMenu = [
  { title: "About", href: "#about" },
  { title: "Blog", href: "#blog" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Contact", href: "#contact" },
  { icon: "Languages" },
  { icon: "Palette" },
]

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
      <ComContainer className="header-inner">
        <div id="logo">
          <img src={LogoBrand} alt="logo" />
        </div>
        <div className="nav">
          <NavBar menu={navMenu} />
        </div>
      </ComContainer>
    </header>
  );
};

export default Header;
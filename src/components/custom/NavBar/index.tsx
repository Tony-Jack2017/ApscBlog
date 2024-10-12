import React, {CSSProperties, ReactNode} from 'react';
import classNames from "classnames";
import LucIcon from "@/components/common/Icon/LucIcon.tsx";

export type NavItemType = {
  title?: string
  icon?: string | ReactNode
  href?: string
  derivative?: ReactNode
  trigger?: "hover" | "click"
  onClick?: (data: NavItemType) => void
}

interface NavBarItf {
  menu: NavItemType[]
  className?: string
  style?: CSSProperties
}

const NavBar: React.FC<NavBarItf> = (props) => {

  const {
    menu,
    className, style
  } = props

  const innerClass = classNames([
    "cus-nav-bar",
    className
  ])

  const innerStyle = Object.assign({}, style)


  /* handle click */

  const handleClick = (item: NavItemType) => {
    if (item.onClick){
      item.onClick(item)
    }
    if(item.href) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <div className={innerClass} style={innerStyle}>
      {
        menu.map((item, index) => {
          return (
            <a key={index} href={item.href ? item.href : ""} className="nav-item" onClick={() => { handleClick(item) }}>
              {
                item.icon
                  ? React.isValidElement(item.icon)
                    ? item.icon
                    : (<LucIcon name={item.icon as string}/>)
                  : null}
              {item.title ? <span>{item.title}</span> : null}
            </a>
          )
        })
      }
    </div>
  );
};

export default NavBar;
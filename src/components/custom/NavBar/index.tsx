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

  return (
    <div className={innerClass} style={innerStyle}>
      {
        menu.map((item, index) => {
          return (
            <a key={index} href={item.href ? item.href : ""} className="nav-item" onClick={() => { item.onClick ?  item.onClick!(item) : null }}>
              {
                item.icon
                  ? React.isValidElement(item.icon)
                    ? item.icon
                    : (<LucIcon name={item.icon as string} />)
                  : null }
              { item.title ? <span>{ item.title }</span> : null }
            </a>
          )
        })
      }
    </div>
  );
};

export default NavBar;
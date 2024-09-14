import React, {createContext} from "react";
import { MenuList } from "../../common/menu";
import classNames from "classnames";
import {NavLink, useLocation} from "react-router-dom";
import PopupBox from "./PopupBox";

interface NavBarItf {
    list?: MenuList[]
    direction?: "vertical" | "horizontal"
    triggerType?: "click" | "hover"
    showActive?: boolean
}

const NavContext = createContext("test")
const ctx = "test"

const NavBar:React.FC<NavBarItf> = (props) => {

    const {
        list,
        direction = "horizontal",
        showActive = false
    } = props

    const classNav = classNames(
        "nav-bar",
        `direction-${direction}`
    )
    const classItem = classNames(
        "menu-item",
        { "show-item-active": showActive }
    )

    const location = useLocation()

    return (
        <NavContext.Provider value={ctx}>
            <nav className={classNav}>
                <ul className="nav-ul">
                    {
                        list?.map((item, index) => {
                            return (
                                <li key={index} className={classItem}>
                                    {
                                        item.path
                                            ?
                                            <NavLink to={item.path}>
                                                <span className="item-content">{ item.title }</span>
                                            </NavLink>
                                            :
                                            <div className="item">
                                                <span className="item-content">{ item.title }</span>
                                            </div>
                                    }
                                    <span className={location.pathname === item.path ? "item-spanner_active" : "item-spanner"}></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </NavContext.Provider>
    )
}

export default NavBar
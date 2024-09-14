import {useContext} from "react";
import {MainLayoutContext} from "../../MainLayout";
import logo from "../../../resource/common/logo/logo-header.png"
import NavBar from "../../../components/common/NavBar";
import {HeaderNav} from "../../../common/menu";
import classNames from "classnames";

const MainHeader = () => {
    const ctx = useContext(MainLayoutContext)

    const classes = classNames(
        "header",
        `layout-${ctx.headerLayout}`
    )

    return (
        <header className={classes}>
            <div className="header-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header-navbar">
                <NavBar list={HeaderNav} />
            </div>
        </header>
    )
}

export default MainHeader
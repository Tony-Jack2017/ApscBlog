import React, {createContext, ReactElement, UIEventHandler, useEffect, useRef, useState} from "react";
import MainHeader from "./components/main/MainHeader";
import MainFooter from "./components/main/MainFooter";
import classNames from "classnames";
import ContainerLayout from "./ContainerLayout";
import {throttle} from "../common/tool";

interface MainLayoutItf {
    headerLayout?: "LeftRight" | ""
    isSticky?: boolean
    stickyHeight?: number
    children?: ReactElement | ReactElement[] | string | never
    showContentExtra?: boolean
}

type MainLayoutCtxProps = {
    headerLayout?: "LeftRight" | ""
    children?: ReactElement
}

export const MainLayoutContext = createContext<MainLayoutCtxProps>({
    headerLayout: "LeftRight"
})

const MainLayout:React.FC<MainLayoutItf> = (props) => {
    const {
        isSticky = false,
        children ,
        headerLayout,
        stickyHeight = 80,
        showContentExtra = false
    } = props
    const main = useRef(null)

    const initClasses = [
        "layout-header",
        {"header-sticky": isSticky}
    ]
    const [classHeader, setClassHeader] = useState(classNames(
        initClasses
    ))
    const ctx:MainLayoutCtxProps = {
        headerLayout: headerLayout ? headerLayout : "LeftRight"
    }

    const handleScroll = (e:any) => {
        setClassHeader((pre) => {
            return classNames(
                initClasses,
                {
                    [`${
                        window.scrollY > stickyHeight 
                            ? "sticky_active" 
                            : pre.indexOf("sticky_active") !== -1 ? "sticky_inactive" : "sticky_normal"
                    }`]: window.scrollY >= 80
                }
            )
        })

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <MainLayoutContext.Provider value={ctx}>
            <main ref={main} className="main-layout">
                <div className={classHeader}>
                    <ContainerLayout fullHeight={true} style={{padding: "0 16px"}}>
                        <MainHeader/>
                    </ContainerLayout>
                </div>
                <div className="layout-content">
                    {
                        showContentExtra && <div className="content-extra">
                        </div>
                    }
                    { children }
                </div>
                <div className="layout-footer">
                    <ContainerLayout fullHeight={true}>
                        <MainFooter/>
                    </ContainerLayout>
                </div>
                <div className="layout-extra">
                </div>
            </main>
        </MainLayoutContext.Provider>
    )
}

export default MainLayout
import {GridLayout, LatticeLayout} from "./components/common/RowColumn";
import React, {CSSProperties, ReactNode} from "react";

interface SidebarLayoutItf {
    gap?: number
    leftSpan?: number
    rightSpan?: number
    children: ReactNode[]
    style?: CSSProperties
}

const SidebarLayout:React.FC<SidebarLayoutItf> = (props) => {

    const {
        gap,
        leftSpan = 18,
        rightSpan = 6,
        style,
        children
    } = props

    return (
        <div className="sidebar-layout" style={style}>
            <GridLayout gap={gap}>
                <LatticeLayout spanColumn={leftSpan}>
                    { children[0] }
                </LatticeLayout>
                <LatticeLayout spanColumn={rightSpan}>
                    { children[1] }
                </LatticeLayout>
            </GridLayout>
        </div>
    )
}

export default SidebarLayout
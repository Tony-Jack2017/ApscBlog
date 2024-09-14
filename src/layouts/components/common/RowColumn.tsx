import React, {CSSProperties, ReactNode} from "react";

interface GridItf {
    gap?: number | [number, number]
    column?: number
    sameRow?: boolean
    style?: CSSProperties
    children?: ReactNode
}
interface LatticeItf {
    offsetLeft?: number
    offsetTop?: number
    spanColumn?: number
    spanRow?: number
    children?: ReactNode
}

const GridLayout:React.FC<GridItf> = (props) => {
    const {
        gap = 0,
        column,
        sameRow = true,
        style,
        children
    } = props

    let innerStyle:React.CSSProperties = {...style}
    if(sameRow) {
        innerStyle.gridAutoRows = "1fr"
    }
    if (gap) {
        innerStyle.gridGap = `${Array.isArray(gap) ? gap[0] : gap}px ${Array.isArray(gap) ? gap[1] : gap}px`
    }
    if (column) {
        innerStyle.gridTemplateColumns = `repeat(${column}, 1fr)`
    }

    return (
        <div className="grid-layout" style={innerStyle}>
            { children }
        </div>
    )
}
const LatticeLayout:React.FC<LatticeItf> = (props) => {
    const {
        offsetLeft,
        offsetTop,
        spanColumn  = 1,
        spanRow = 1,
        children
    } = props

    let innerStyle:React.CSSProperties = {}
    innerStyle.gridArea = `${offsetTop ? `${offsetTop}` : "auto"} / ${offsetLeft ? `${offsetLeft}` : "auto"} / ${spanRow ? `span ${spanRow}` : "auto"} / ${spanColumn ? `span ${spanColumn}` : "auto"}`
    return (
        <div className="lattice-layout" style={innerStyle}>
            { children }
        </div>
    )
}

export {
    GridLayout,
    LatticeLayout
}
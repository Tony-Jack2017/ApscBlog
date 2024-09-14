import classNames from "classnames";
import {CSSProperties, FC, ReactNode} from "react";

interface PopupBoxItf {
    position: "bottom" | "right" | "left"
    children: ReactNode
}

const PopupBox:FC<PopupBoxItf> = (props) => {

    const {
        position,
        children
    } = props

    const classes = classNames(
        "popup-box"
    )

    let innerStyle:CSSProperties = {}

    switch (position) {
        case "bottom":
            innerStyle.top = "calc(100% + 8px)";
            break;
        case "right":
            innerStyle.left = 0;
            break;
        case "left":
            innerStyle.left = 0;
            break;
        default:
            innerStyle.right = 0
    }

    return (
        <div className={classes} style={innerStyle}>
            { children }
        </div>
    )
}

export default PopupBox
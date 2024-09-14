import classNames from "classnames";
import React, {ReactElement} from "react";

interface DividerItf {
    color?: string
    direction?: "vertical" | "horizontal"
    children?: ReactElement | string
}

const Divider:React.FC<DividerItf> = (props) => {

    const {
        color,
        children ,
        direction = "horizontal"
    } = props

    const classes= classNames(
        "divider",
        `divider-${direction}`
    )

    return (
        <div className={classes}>
            <div className="divider-content">
                {
                    children
                }
            </div>
            <div className="divider-line" style={color ? { backgroundColor: color } : undefined}></div>
        </div>
    )
}

export default Divider
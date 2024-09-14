import React, {ReactElement} from "react";
import classNames from "classnames";

interface ContainerLayoutItf {
    style?: object
    className?: string
    children?: ReactElement[] | ReactElement | string
    fullWidth?: boolean
    fullHeight?: boolean
}

const ContainerLayout:React.FC<ContainerLayoutItf> = (props) => {
    const {
        children,
        className,
        style ,
        fullWidth,
        fullHeight
    } = props
    const classes = classNames(
        "container-layout",
        className
    )
    const innerStyle = {
        maxWidth: fullWidth ? "100%" : "auto",
        height: fullHeight ? "100%" : "auto"
    }

    return (
        <div className={classes} style={{ ...innerStyle, ...style }}>
            {
                children
            }
        </div>
    )
}

export default ContainerLayout
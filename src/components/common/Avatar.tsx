import classNames from "classnames";
import {CSSProperties, FC} from "react";
interface AvatarItf {
    size?: "small" | "normal" | "large" | number
    type?: "circle" | "square"
    avatar?: string
    name?: string
}

const getInnerStyle = (size:AvatarItf["size"], type:AvatarItf["type"]) => {
    let innerStyle:CSSProperties = {}
    switch (size) {
        case "normal":
            innerStyle.width = 80;
            innerStyle.height = 80;
            break;
        case "small":
            innerStyle.width = 60;
            innerStyle.height = 60;
            break;
        case "large":
            innerStyle.width = 100;
            innerStyle.height = 100;
            break;
        default:
            innerStyle.width = size
            innerStyle.height = size;
    }
    switch (type) {
        case "circle":
            innerStyle.borderRadius = 999
            break;
        case "square":
            innerStyle.borderRadius = 8
            break
        default:
            innerStyle.borderRadius = 4
    }
    return innerStyle
}

const Avatar:FC<AvatarItf> = (props) => {

    const {
        size = "normal",
        type = "circle",
        avatar
    } = props

    const classes = classNames(
        "avatar",
        `avatar-type_${type}`
    )

    const innerStyle = getInnerStyle(size, type)

    return (
        <div className={classes} style={innerStyle}>
            {
                avatar ? <img src={avatar} alt="avatar" /> : <span className="username">A</span>
            }
        </div>
    )
}

export default Avatar
import classNames from "classnames";
import {CSSProperties, FC} from "react";

interface TagItf {
    type?: "fill" | "text" | "ban"
    icon?: string,
    title: string,
    style?: CSSProperties
}

const Tag:FC<TagItf> = (props) => {
    const {
        type = "fill",
        icon,
        title,
        style
    } = props

    const classes = classNames(
        "tag",
        `tag-type_${type}`
    )

    return (
        <div className={classes} style={style}>
            {
                icon && <i className={`tag-icon iconfont ${icon}`} ></i>
            }
            <span className="tag-title">{ title }</span>
        </div>
    )
}

export default Tag
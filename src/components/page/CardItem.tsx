import classNames from "classnames";
import {CSSProperties, FC, ReactNode} from "react";

interface CardItemItf {
    type?: "one" | "two"
    cover?: string
    style?: CSSProperties
    canAction?: boolean
    children: ReactNode
    showDark?: boolean
}

const CardItem:FC<CardItemItf> = (props) => {

    const {
        type = "one",
        style,
        cover,
        canAction = false,
        showDark = true,
        children
    } = props
    const classes = classNames(
        "card-item",
        `card-item_${type}`,
        { "card-item-action": canAction }
    )
    const innerStyle = {
        backgroundColor: showDark ? "rgba(0, 0, 0, .75)" : "rgba(0, 0, 0, 0)"
    }

    return (
        <div className={classes} style={style}>
            {
                cover && <div className="card-item-cover">
                    <img src={cover} alt="cover" />
                </div>
            }
            {
                children && <div className="card-item-content" style={innerStyle}>
                    { children }
                </div>
            }
        </div>
    )
}

export default CardItem
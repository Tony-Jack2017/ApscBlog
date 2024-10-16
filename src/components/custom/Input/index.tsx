import classNames from "classnames";
import {CSSProperties, forwardRef} from "react";

interface CusInoutItf {
  type?: "text-area" | "password" | "text"
  label?: string
  placeholder?: string
  className?: string
  style?: CSSProperties
}

const CusInput = forwardRef<HTMLDivElement, CusInoutItf>((props, ref) => {

  const {
    type = "text", label, placeholder,
    className, style
  } = props

  const innerClass = classNames([
    "cus-input",
    `input-type-${type}`,
    "cus-input-default",
    className
  ])

  const innerStyle = Object.assign({}, style) as CSSProperties

  return (
    <div ref={ref} className={innerClass} style={innerStyle}>
      { label ? <label>{label}</label> : null }
      { type === "text-area"
        ?  <textarea placeholder={placeholder ? placeholder : ""} />
        : <input placeholder={placeholder ? placeholder : ""} />
      }

    </div>
  )
})

export default CusInput

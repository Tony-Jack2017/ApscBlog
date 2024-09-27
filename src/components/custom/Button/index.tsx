import {forwardRef} from "react";

interface ButtonItf {

}

const Button = forwardRef<HTMLButtonElement, ButtonItf>((props, ref) => {
  return (
    <button>

    </button>
  )
})

export default Button
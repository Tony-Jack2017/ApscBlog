import {forwardRef, useEffect, useState} from "react";
import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion"

interface LoadingButtonItf {
  title: string
}

type loadingButtonType = {
    status: "default" | "pending" | "success" | "failed"
}

const ButtonInner = ({ status, title } : { status: loadingButtonType["status"], title: string }) => {
  return  (
    <AnimatePresence>
      <motion.div
        key={status}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span>{ status == "default" ? title : status }</span>
      </motion.div>
    </AnimatePresence>
  )
}


const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonItf>((props, ref) => {

  const {
      title
  } = props;

  const [status, setStatus] = useState<loadingButtonType["status"]>("default");

  const mainClasses = classNames([
      "cus-btn cus-loading-btn"
  ]);

  useEffect(() => {
      let timer = null
      if(status == "success" || status == "failed") {
          timer = setTimeout(() => {
              setStatus("default")
          }, 2000)
      }
      return () => {
          if (timer) clearTimeout(timer)
      }
  }, [status])

  const handleClick = () => {
      setStatus("pending")
      setTimeout(() => {
          if(Math.random() > 0.5) {
              setStatus("success")
          }else {
              setStatus("failed")
          }
      }, 2000)
  }

  return (
    <button ref={ref} className={mainClasses} onClick={handleClick}>
      <ButtonInner status={status} title={title} />
    </button>
  )
})

export default LoadingButton

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
    switch (status) {
        case "default":
            return <span>{title}</span>
        case "pending":
            return <span>pending</span>
        case "success":
            return <span>success</span>
        case "failed":
            return <span>failed</span>
    }
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
        <AnimatePresence initial={false}>
            <motion.div
                key={status}
                initial={{ opacity: 0, y: -20, position: "absolute", zIndex: 0}}
                animate={{ opacity: 1, y: 0, zIndex: 1}}
                exit={{ opacity: 0, y: 20, position: "absolute", zIndex: 0 }}
                transition={{ duration: .3 }}
            >
                <ButtonInner status={status} title={title} />
            </motion.div>
        </AnimatePresence>
    </button>
  )
})

export default LoadingButton

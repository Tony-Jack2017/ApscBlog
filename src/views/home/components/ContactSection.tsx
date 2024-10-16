import {motion} from "framer-motion";

import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import MagicCard from "@/components/ui/magic-card.tsx";
import CusInput from "@/components/custom/Input";
import {RainbowButton} from "@/components/ui/rainbow-button.tsx";
import LucIcon from "@/components/common/Icon/LucIcon.tsx";
import CusText from "@/components/custom/Text";

const boxVariants = {
  hidden:{
    clipPath: "inset(90% 50% 10% 50% round 10px)",
  },
 visible: {
   clipPath: "inset(0% 0% 0% 0% round 10px)",
   transition: {
     type: "spring",
     bounce: 0,
     duration: 0.7,
     delayChildren: 0.3,
     staggerChildren: 0.05
   }
 }
}

const ContactSection = () => {
  return (
    <SectionContainer isSticky={true} id="contact" className="contact-section">
      <ComContainer>
        <div className="title">
          GET IN <CusText isGradient={true}>TOUCH</CusText> TO ME
          <p className="content">
            Send message to me
          </p>
        </div>
        <motion.div
          className="contact-content"
          whileInView="visible" // 元素进入视口时触发
          initial="hidden" // 元素初始状态
          variants={boxVariants}
        >
          <MagicCard
            className="send-email-form flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
            gradientColor={"#262626"}
          >
            <div className="form-header">
              <CusInput className="flex-1" label="UserName" placeholder="Please Input Your UserName"/>
              <CusInput className="flex-1" label="Email" placeholder="Please Input Your Email"/>
            </div>
            <div className="form-message">
              <CusInput label="Message" type="text-area" placeholder="Input Your Want To Say"/>
            </div>
            <div className="form-action">
              <RainbowButton style={{fontSize: "1rem"}}>
                Send <LucIcon name="Send" size="1rem" style={{paddingLeft: "12px"}}/>
              </RainbowButton>
            </div>
          </MagicCard>
        </motion.div>
        <div className="footer">
          <ComContainer className="maker text-center">
            MADE BY ❤ <span className="text-secondary">APSC BUILDER</span>
          </ComContainer>
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default ContactSection

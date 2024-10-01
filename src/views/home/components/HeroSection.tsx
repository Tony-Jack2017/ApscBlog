import {motion} from "framer-motion"

import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import Card from "@/components/common/Card";
import Avatar from "@/components/common/Avatar";

import AvatarImg from "@/assets/img/common/avatar/avatar.png"
import Icon from "@/components/common/Icon";
import {useState} from "react";

const touchList = [
  {path: "", title: "wechat", icon: "bxs-envelope"},
  {path: "", title: "github", icon: "bxl-github"},
  {path: "", title: "discord", icon: "bxl-discord-alt"},
  {path: "", title: "twitter", icon: "bxl-twitter"},
]

const HeroSection = () => {

  const [showTouch, setShowTouch] = useState(false)

  const handleHoverStart = () => {
    setShowTouch(true)
  }

  const handleHoverEnd = () => {
    setShowTouch(false)
  }

  return (
    <SectionContainer className="hero-section">
      <div className="info-content">
        <Card className="calling-card" isPure={false}>
          <div className="calling-avatar">
            <Avatar src={AvatarImg}/>
          </div>
          <div className="calling-username">
            Lin Gan
          </div>
          <div className="calling-words">
            Web Designer who has crafted countless user experiences
          </div>
        </Card>
        <Card className="calling-touch">
          <motion.div
            className="touch"
            whileHover={{width: "calc(100% - 2rem)"}}
            transition={{duration: .3}}
            onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
            {
              showTouch
                ? <>
                  {
                    touchList.map((item, index) => (
                      <Icon key={index} isAction={true} icon={item.icon} size="large"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{ delay: 1 / (index + 1.8), duration: 1 }}
                      />
                    ))
                  }
                </>
                : <Icon icon="bx-right-arrow-alt" className="trigger-icon" size="large"/>
            }
          </motion.div>
          <span className="title"> Get In Touch </span>
        </Card>
      </div>
      <div className="call-content">
        <Card className="hero-title" animateDelay={.5}>
          That’ Me, Welcome to my portfolio
        </Card>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

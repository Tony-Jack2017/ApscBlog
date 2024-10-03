import {motion} from "framer-motion"

import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import Card from "@/components/common/Card";
import Avatar from "@/components/common/Avatar";

import AvatarImg from "@/assets/img/common/avatar/avatar.png"
import Icon from "@/components/common/Icon";
import {useState} from "react";
import AvatarGroup from "@/components/common/Avatar/Group.tsx";

/* avatar list */
import Avatar1 from "@/assets/img/common/avatar/avatar_1.png"
import Avatar2 from "@/assets/img/common/avatar/avatar_2.png"
import Avatar3 from "@/assets/img/common/avatar/avatar_3.png"

const touchList = [
  {path: "", title: "wechat", icon: "bxs-envelope"},
  {path: "", title: "github", icon: "bxl-github"},
  {path: "", title: "discord", icon: "bxl-discord-alt"},
  {path: "", title: "twitter", icon: "bxl-twitter"},
]

const skillList = [
  { title: "React", icon: "bxl-react" },
  { title: "Framer", icon: "bxl-figma" },
  { title: "Redux", icon: "bxl-redux" },
  { title: "Golang", icon: "bxl-go-lang" },
  { title: "C/C++", icon: "bxl-c-plus-plus" },
]


const avatarList = [
  Avatar1, Avatar2, Avatar3
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
            <Avatar src={AvatarImg} size="auto" />
          </div>
          <div className="calling-username">
            Lin Gan
          </div>
          <div className="calling-words">
            Web Designer who has crafted countless user experiences
          </div>
        </Card>
        <Card className="calling-touch" animateDelay={.3}>
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
                            transition={{ delay: index * 0.2, duration: 1 }}
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
        <Card className="hero-title" animateDelay={.6}>
          That’ Me, Welcome to my portfolio
          <div className="our-meta">
            <AvatarGroup list={avatarList} offset={32} />
          </div>
          <div className="project-list">
          </div>
          <div className="power-info">
            <div className="info-title">
              <div className="sub-title">
                The Power I Have
              </div>
              <div className="sub-content">
                From front-end to back-end, let technology and creativity continuously push the boundaries.
              </div>
            </div>
            <div className="info-content">
              {
                skillList.map((item, index) => (
                  <div key={index} className="skill-item">
                    {item.title}
                    <Icon icon={item.icon} color="white" isPure={true} />
                  </div>
                ))
              }
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

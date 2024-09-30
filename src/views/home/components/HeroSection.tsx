import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import Card from "@/components/common/Card";
import Avatar from "@/components/common/Avatar";

import AvatarImg from "@/assets/img/common/avatar/avatar.png"

const HeroSection = () => {
  return (
    <SectionContainer className="hero-section">
      <div className="info-content">
        <Card className="calling-card" isPure={false}>
          <div className="calling-avatar">
            <Avatar src={AvatarImg} />
          </div>
          <div className="calling-username">
            Lin Gan
          </div>
          <div className="calling-words">
            Web Designer who has crafted countless user experiences
          </div>
        </Card>
      </div>
      <div className="call-content">
        <Card className="hero-title">
          That’ Me, Welcome to my portfolio
        </Card>
      </div>
    </SectionContainer>
  )
}

export default HeroSection

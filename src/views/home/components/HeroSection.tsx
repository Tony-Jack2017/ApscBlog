import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import {OrbitingCirclesDemo} from "@/components/custom/Orbiting";
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import CusText from "@/components/custom/Text";


const HeroSection = () => {


  return (
    <SectionContainer className="hero-section">
      <ComContainer className="hero-content">
        <div className="info-content">
          <div className="username">
            <p className="tip">Hello I'm</p>
            <CusText isGradient={true}>Lin Gan</CusText>
          </div>
          <div>
            <h3 style={{ fontWeight: "lighter", fontSize: "2rem" }}>Skills</h3>
            Web Development UI & UX Design Marketing SEO Management
          </div>
        </div>
        <div className="call-content">
          <OrbitingCirclesDemo />
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default HeroSection

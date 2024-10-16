import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import {OrbitingCirclesDemo} from "@/components/custom/Orbiting";
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import CusText from "@/components/custom/Text";
import MouseAnimate from "@/components/tools/MouseAnimate.tsx";


const HeroSection = () => {


  return (
    <SectionContainer className="hero-section">
      <ComContainer className="hero-content">
        <div className="info-content">
          <div className="username">
            <p className="tip">Hello I'm</p>
            <CusText isGradient={true}>Lin Gan</CusText>
          </div>
          <div className="desc">
            <div className="desc-item motto">
              <h3 style={{ fontWeight: "lighter", fontSize: "2rem" }}>Motto</h3>
              <p>
                "Don’t watch the clock; do what it does. Keep going." — Sam Levenson
              </p>
              <p>
                "Be yourself; everyone else is already taken." — Oscar Wilde
              </p>
              <p>
                "Fall seven times, stand up eight." — Japanese Proverb
              </p>
            </div>
            <div className="desc-item skills">
              <h3 style={{ fontWeight: "lighter", fontSize: "2rem" }}>Skills</h3>
              <ul className="skill">
                <li>Web Developer</li>
                <li>Design</li>
                <li>Electronics</li>
              </ul>
            </div>
          </div>
          <div className="call">
            <MouseAnimate />
            <span>VIEW MORE</span>
          </div>
        </div>
        <div className="banner-content">
          <OrbitingCirclesDemo />
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default HeroSection

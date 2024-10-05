import CusText from "@/components/custom/Text";
import SectionContainer from "@/components/layout/base/SectionContainer.tsx";

const AboutSection = () => {
  return (
    <SectionContainer className="about-section lr-section">
      <div className="about-info">
        <CusText className="title" isGradient={true}>
          About Me
        </CusText>
        <div className="content">
          Currently pursuing my BTech in Computer Science from VITB, I gained interest in UI designing during my 2nd year. Been working to make that interest into a career ever since.
          I love listening to music (you'll never catch me without my headphones), I'm a huge dog person, and I like to procrastinate by binging YouTube and anime.  I strongly believe that the internet should be more fun, starting with websites.
        </div>
      </div>
      <div className="picture-list">

      </div>
    </SectionContainer>
  )
}

export default AboutSection
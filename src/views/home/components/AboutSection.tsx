import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import {OrbitingCirclesDemo} from "@/components/custom/Orbiting";
import HyperText from "@/components/ui/hyper-text.tsx";
import {RainbowButton} from "@/components/ui/rainbow-button.tsx";


const InfoData = ({ data, title }: { data: string, title: string }) => {
  return (
    <div>
      <HyperText
        className="text-6xl font-bold text-blackdark:text-white"
        text={data}
      />
      <p className="text-lg font-light">
        { title }
      </p>
    </div>
  )
}

const infoList = [
  { data: "04+", title: "Year of experience" },
  { data: "05+", title: "Completed projects" },
  { data: "03+", title: "Companies of work" },
]

const AboutSection = () => {
  return (
    <SectionContainer className="about-section" isSticky={true} style={{ top: 0, zIndex: 1 }}>
      <div className="title text-primary-foreground">
        ABOUT ME
        <p className="content">
          This is my introduction
        </p>
      </div>
      <div className="info-content">
        <div className="about-info">
          <OrbitingCirclesDemo />
        </div>
        <div className="desc-info">
          <div className="content">
            <p>
              Currently pursuing my BTech in Computer Science from VITB, I gained interest in UI designing during my 2nd year. Been working to make that interest into a career ever since.
              I love listening to music (you'll never catch me without my headphones), I'm a huge dog person, and I like to procrastinate by binging YouTube and anime.  I strongly believe that the internet should be more fun, starting with websites.
            </p>
            <div className="data-list">
              {
                infoList.map((item, index) => {
                  return (
                    <InfoData key={index} data={item.data} title={item.title} />
                  )
                })
              }
            </div>
            <div className="mt-8">
              <RainbowButton>
                View My Resume
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutSection
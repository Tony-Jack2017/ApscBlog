import ComContainer from "@/components/layout/base/ComContainer.tsx";
import {BentoDemo} from "@/components/custom/BentoDemo";
import SectionContainer from "@/components/layout/base/SectionContainer.tsx";

const WorkSection = () => {
  return (
    <SectionContainer id="work" className="work-section">
      <ComContainer>
        <div className="title text-primary-foreground">
          My PortFolio
          <p className="content">
            There are a bit of portfolio which are developed at my work time
          </p>
        </div>
        <div className="portfolio-content">
          <BentoDemo />
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default WorkSection

import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import {BentoDemo} from "@/components/custom/BentoDemo";

const PortFolioSection = () => {
  return (
    <SectionContainer id="portfolio" className="portfolio-section">
      <ComContainer>
        <div className="title text-primary-foreground">
          My <span className="text-secondary">PortFolio</span>
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

export default PortFolioSection
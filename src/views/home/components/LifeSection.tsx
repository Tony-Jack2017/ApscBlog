import SectionContainer from "@/components/layout/base/SectionContainer.tsx";
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import MarqueeDemo from "@/components/custom/MarqueeDemo";

const LifeSection = () => {
  return (
    <SectionContainer id="life" isSticky={true} className="life-section">
      <ComContainer>
        <div className="title text-primary-foreground">
         Capturing The Life Of <span style={{ color: "white" }}>Moments</span>
          <p className="content">
            Oh I also love capturing skies and moments
          </p>
        </div>
        <div className="life-content">
          <MarqueeDemo />
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default LifeSection

import ComContainer from "@/components/layout/base/ComContainer.tsx";
import SectionContainer from "@/components/layout/base/SectionContainer.tsx";

const WorkSection = () => {
  return (
    <SectionContainer isSticky={true} id="work" className="work-section">
      <ComContainer>
        <div className="title text-primary-foreground">
          This is my <span className="text-secondary">work</span>
          <p className="content">
            There are a bit of portfolio which are developed at my work time
          </p>
        </div>
        <div className="desc">
          <p>
            I've worked professionally for company's project. The <span>admin website</span>, <span>landing page</span> and <span>H5 activity interface</span>.
          </p>
          <p>
            Also worked on some personal projects such as personal <span>blog website</span> & <span>wechat mini program</span>
          </p>
          <p>
            Try to think of this is a testament for me which my work's website, Sometime, I've used <span>ui tool</span> to design and developed this website by myself.
          </p>
        </div>
        <div className="work-content">
          <div className="item mobile-item">
            <div className="sub-title">MOBILE PROJECT</div>
            <div className="show">

            </div>
          </div>
          <div className="item pc-item">
            <div className="sub-title">PC PROJECT</div>
            <div className="show">
              <div className="show-item"></div>
              <div className="show-item"></div>
            </div>
          </div>
        </div>
      </ComContainer>
    </SectionContainer>
  )
}

export default WorkSection

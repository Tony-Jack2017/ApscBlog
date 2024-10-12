
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import {OrbitingCirclesDemo} from "@/components/custom/Orbiting";
import AboutSection from "@/views/home/components/AboutSection.tsx";
import ContactSection from "@/views/home/components/ContactSection.tsx";
import {DockDemo} from "@/components/custom/DockDemo";
import ComContainer from "@/components/layout/base/ComContainer.tsx";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <ComContainer isFull={true}>
        <div style={{ padding: "200px", background: "white",  margin: "0 auto" }}>
          <OrbitingCirclesDemo />
        </div>
        <AboutSection />
        <ContactSection />
      </ComContainer>
      {/* Something Extra */}
      <div className="social">
        <DockDemo />
      </div>
    </PageContainer>
  )
}

export default HomePage

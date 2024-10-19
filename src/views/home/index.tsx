
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import AboutSection from "@/views/home/components/AboutSection.tsx";
import ContactSection from "@/views/home/components/ContactSection.tsx";
import {DockDemo} from "@/components/custom/DockDemo";
import ComContainer from "@/components/layout/base/ComContainer.tsx";
import HeroSection from "@/views/home/components/HeroSection.tsx";
import WorkSection from "@/views/home/components/WorkSection.tsx";
import LifeSection from "@/views/home/components/LifeSection.tsx";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <ComContainer isFull={true}>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <LifeSection />
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

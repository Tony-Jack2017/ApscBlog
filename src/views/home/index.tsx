
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import HeroSection from "@/views/home/components/HeroSection.tsx";
import AboutSection from "@/views/home/components/AboutSection.tsx";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <HeroSection />
      <AboutSection />
    </PageContainer>
  )
}

export default HomePage

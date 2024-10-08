
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import HeroSection from "@/views/home/components/HeroSection.tsx";
import AboutSection from "@/views/home/components/AboutSection.tsx";



import CusTextCircle from "@/components/custom/Text/Circle.tsx";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <HeroSection />
      <div style={{ width: 100, height: 100 }}>
        <CusTextCircle />
      </div>
      <AboutSection />
    </PageContainer>
  )
}

export default HomePage

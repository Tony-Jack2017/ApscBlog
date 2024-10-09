
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import HeroSection from "@/views/home/components/HeroSection.tsx";
import AboutSection from "@/views/home/components/AboutSection.tsx";



import CusTextCircle from "@/components/custom/Text/Circle.tsx";
import ContactSection from "@/views/home/components/ContactSection.tsx";

import {CodeComparisonDemo} from "@/components/custom/Code";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <HeroSection />
      <div style={{ width: 100, height: 100, margin: "0 auto" }}>
        <CusTextCircle />
      </div>
      <div style={{ margin: "0 auto" }}>
        <CodeComparisonDemo />
      </div>
      <AboutSection />
      <ContactSection />
    </PageContainer>
  )
}

export default HomePage

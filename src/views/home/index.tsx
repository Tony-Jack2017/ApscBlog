
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import {OrbitingCirclesDemo} from "@/components/custom/Orbiting";
import AboutSection from "@/views/home/components/AboutSection.tsx";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <div style={{ padding: "200px", background: "white",  margin: "0 auto" }}>
        <OrbitingCirclesDemo />
      </div>
      <AboutSection />
      <div style={{ position: "relative", zIndex: 2, background: "white", padding: "200px", margin: "0 auto" }}>
        <OrbitingCirclesDemo />
      </div>
      <div style={{ padding: "200px", margin: "0 auto" }}>
        <OrbitingCirclesDemo />
      </div>
      <div style={{ padding: "200px", margin: "0 auto" }}>
        <OrbitingCirclesDemo />
      </div>
    </PageContainer>
  )
}

export default HomePage

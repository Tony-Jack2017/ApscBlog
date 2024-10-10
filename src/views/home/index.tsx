
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";
import {OrbitingCirclesDemo} from "@/components/custom/Orbiting";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
      <div style={{ margin: "100px auto", width: 500 }}>
        <OrbitingCirclesDemo />
      </div>
    </PageContainer>
  )
}

export default HomePage

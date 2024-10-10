
import "@/styles/views/home.scss"

import PageContainer from "@/components/layout/base/PageContainer.tsx";
import Header from "@/views/home/components/Header.tsx";

const HomePage = () => {
  return (
    <PageContainer className="home-page">
      <Header />
    </PageContainer>
  )
}

export default HomePage

import { HeaderComponent } from "../../components/Header/HeaderComponent"
import { FooterComponent } from "../../components/Footer/FooterComponent"
import { IntroComponent } from "../../components/Intro/IntroComponent"
import { DataTableComponent } from "../../components/DataTable/DataTableComponent"
import { AppsGalleryComponent } from "../../components/AppsGallery/AppsGalleryComponent"
import { PageWrapper, MainContent } from "./HomeStyled"

export function Home() {
  return (
    <PageTransition
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <PageWrapper>
        <HeaderComponent />
        <MainContent>
          <IntroComponent />
          <DataTableComponent />
          <AppsGalleryComponent />
        </MainContent>
        <FooterComponent />
      </PageWrapper>
    </PageTransition>
  )
}
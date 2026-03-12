import { HeaderComponent } from "../../components/Header/HeaderComponent"
import { FooterComponent } from "../../components/Footer/FooterComponent"
import { ContactComponent } from "../../components/Contact/ContactComponent"
import { AppsGalleryComponent } from "../../components/AppsGallery/AppsGalleryComponent"
import { PageWrapper, MainContent } from "./HomeStyled"
import { PageTransition, pageVariants, pageTransition } from "../../styles/PageTransition"
import { IntroComponent } from "../../components/Intro/IntroComponent"

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
          <AppsGalleryComponent />
          <ContactComponent />
        </MainContent>
        <FooterComponent />
      </PageWrapper>
    </PageTransition>
  )
}
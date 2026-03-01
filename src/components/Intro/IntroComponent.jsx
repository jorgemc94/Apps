import { FaWhatsapp } from "react-icons/fa"
import { IntroWrapper, WhatsApp } from "./IntroStyled"
import { Title, Subtitle } from "../../styles/Typography"

export function IntroComponent() {
  return (
    <IntroWrapper>
      <Title>ACTUALIZAR LISTAS</Title>
      <Subtitle>
        Esto es una guía de cómo actualizar las listas y ponerlas en vuestras aplicaciones. 
        Si esto no os funciona, la solución es hablar a este teléfono de WhatsApp, no llaméis solo atiende por WhatsApp.{" "}
        <WhatsApp href="https://wa.me/8613316900374" target="_blank">
          <FaWhatsapp />
          Felicia
        </WhatsApp>
      </Subtitle>
    </IntroWrapper>
  )
}
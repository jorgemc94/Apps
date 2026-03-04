import { FaWhatsapp } from "react-icons/fa"
import { IntroWrapper, WhatsApp } from "./IntroStyled"
import { Title, Subtitle } from "../../styles/Typography"

export function IntroComponent() {
  return (
    <IntroWrapper>
      <Title>ACTUALIZAR LISTAS</Title>
      <Subtitle>
        Esto es una guía de cómo actualizar las listas y ponerlas en vuestras aplicaciones. 
        Si esto no os funciona, la solución es hablar a este teléfono de WhatsApp, no llaméis solo atiende por WhatsApp.
        En el mensaje debéis escribir vuetro nombre de usuario completo, aplicación que estéis usando y decir que no os funciona incluso actualizando la lista. Pero antes de llegar a esto actualizar las listas vosotros.
        Estos son los dos teléfonos que utilizo para hablar con ellos: 
      </Subtitle>
      <WhatsApp href="https://wa.me/8618123896049" target="_blank">
        <FaWhatsapp />
      </WhatsApp>
      <WhatsApp href="https://wa.me/8613316900374" target="_blank">
        <FaWhatsapp />
      </WhatsApp>
    </IntroWrapper>
  )
}
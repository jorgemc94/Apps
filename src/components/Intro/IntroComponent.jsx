import { Title, Subtitle } from "../../styles/Typography";
import { Container, StepList, StepItem, Note } from "./IntroStyled";
import { intro } from "../../data/intro";

export function IntroComponent() {
    const keywords = ["usuario", "contraseña", "URL", "Notas del móvil", "Google Chrome", "tabla", "imágenes", "foto de referencia", "códigos", "TV"];

    const highlightKeywords = (text) => {
        let result = text;
        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, "gi");
            result = result.replace(regex, `<strong>$1</strong>`);
        });
        return result;
    };

    return (
        <Container>
            <Title>Uso de la página</Title>
            <Subtitle>
                Esta es una guía paso a paso para que puedan actualizar las listas por ustedes mismos. Siempre que sea posible, cada aplicación tendrá un video mostrando cómo lo hago personalmente.
            </Subtitle>

            <StepList>
                {intro.map((step, index) => (
                    <StepItem key={index} number={index + 1}>
                        <p dangerouslySetInnerHTML={{ __html: highlightKeywords(step) }} />
                    </StepItem>
                ))}
            </StepList>

            <Note>
                Este procedimiento es útil en caso de que yo no pueda hacerlo personalmente. Así podrán gestionarlo ustedes mismos sin interrupciones en el uso de la página.  
                Por favor, lean cuidadosamente cada paso antes de realizarlo.
            </Note>
        </Container>
    );
}
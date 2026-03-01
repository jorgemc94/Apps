import { useParams } from "react-router-dom"
import { apps } from "../../data/apps"
import { StepsContainer, StepWrapper, PageWrapper } from "./AppDetailStyled"
import { PageTransition, pageVariants, pageTransition } from "../../styles/PageTransition"
import { Title } from "../../styles/Typography"

export function AppDetail() {
  const { id } = useParams()
  const app = apps.find(a => a.id === id)

  if (!app) return <p style={{ padding: "1rem" }}>App no encontrada</p>

  return (
    <PageTransition
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <PageWrapper>
        <Title>{app.name}</Title>

        <StepsContainer>
          {app.steps.map((step, index) => (
            <StepWrapper
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {step.text && <p>{step.text}</p>}
              {step.image && <img src={step.image} alt={`Step ${index + 1}`} />}
              {step.link && <a href={step.link} target="_blank" rel="noopener noreferrer"> {step.linkLabel} </a>}
            </StepWrapper>
          ))}
        </StepsContainer>
      </PageWrapper>
    </PageTransition>
  )
}
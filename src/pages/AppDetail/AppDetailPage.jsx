import { useParams } from "react-router-dom"
import { useState } from "react"
import { apps } from "../../data/apps"
import {
  PageWrapper,
  StepsViewport,
  StepsTrack,
  StepWrapper,
  ProgressBarWrapper,
  ProgressBar
} from "./AppDetailStyled"
import { PageTransition, pageVariants, pageTransition } from "../../styles/PageTransition"
import { Subtitle, Title } from "../../styles/Typography"
import { motion } from "framer-motion"

export function AppDetail() {
  const { id } = useParams()
  const app = apps.find((a) => a.id === id)

  const [currentStep, setCurrentStep] = useState(0)

  if (!app) return <p style={{ padding: "1rem" }}>App no encontrada</p>

  const nextStep = () => {
    if (currentStep < app.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Swipe simple
  let touchStartX = 0
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (diff > 50) nextStep()
    else if (diff < -50) prevStep()
  }

  // progreso animado
  const progress = ((currentStep + 1) / app.steps.length) * 100

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
        <Subtitle>{app.moredescription}</Subtitle>

        <StepsViewport
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <StepsTrack
            as={motion.div}
            animate={{ x: `-${currentStep * 100}%` }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {app.steps.map((step, index) => (
              <StepWrapper key={index}>
                {(step.text || step.link) && (
                  <div className="text-link-wrapper">
                    {step.text && <p>{step.text}</p>}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {step.linkLabel}
                      </a>
                    )}
                  </div>
                )}
                {step.image && <img src={step.image} alt={`Step ${index + 1}`} />}
              </StepWrapper>
            ))}
          </StepsTrack>
        </StepsViewport>

        <ProgressBarWrapper>
          <ProgressBar
            as={motion.div}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </ProgressBarWrapper>
      </PageWrapper>
    </PageTransition>
  )
}
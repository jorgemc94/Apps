import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { apps } from "../../data/apps"
import { PageWrapper, StepsViewport, StepsTrack, StepWrapper, ProgressBarWrapper, ProgressBar } from "./AppDetailStyled"
import { PageTransition, pageVariants, pageTransition } from "../../styles/PageTransition"
import { Subtitle, Title } from "../../styles/Typography"
import { motion } from "framer-motion"

export function AppDetail() {
  const { id } = useParams()
  const app = apps.find((a) => a.id === id)

  const [currentStep, setCurrentStep] = useState(0)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!app) return <p style={{ padding: "1rem" }}>App no encontrada</p>

  const nextStep = () => {
    if (currentStep < app.steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  let touchStartX = 0

  const handleTouchStart = (e) => {
    if (isDesktop) return
    touchStartX = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (isDesktop) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (diff > 50) nextStep()
    else if (diff < -50) prevStep()
  }

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
            animate={isDesktop ? { x: 0 } : { x: `-${currentStep * 100}%` }}
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
                {step.image && (
                  <img
                    src={step.image}
                    alt={`Paso ${index + 1}`}
                  />
                )}
              </StepWrapper>
            ))}
          </StepsTrack>
        </StepsViewport>

        {!isDesktop && (
          <ProgressBarWrapper>
            <ProgressBar
              as={motion.div}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </ProgressBarWrapper>
        )}
      </PageWrapper>
    </PageTransition>
  )
}
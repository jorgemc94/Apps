import { useParams } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { apps } from "../../data/apps"
import { StepsContainer, StepWrapper, PageWrapper, DotsWrapper, Dot } from "./AppDetailStyled"
import { PageTransition, pageVariants, pageTransition } from "../../styles/PageTransition"
import { Subtitle, Title } from "../../styles/Typography"

export function AppDetail() {
  const { id } = useParams()
  const app = apps.find((a) => a.id === id)

  const containerRef = useRef(null)
  const touchStartX = useRef(0)
  const [currentStep, setCurrentStep] = useState(0)
  const scrollTimeout = useRef(null)

  if (!app) return <p style={{ padding: "1rem" }}>App no encontrada</p>

  const goToStep = (index) => {
    const container = containerRef.current
    if (!container) return

    const stepWidth = container.offsetWidth

    container.scrollTo({
      left: stepWidth * index,
      behavior: "smooth",
    })

    setCurrentStep(index)
  }

  // Para snap automático al terminar scroll
  const handleScroll = () => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

    scrollTimeout.current = setTimeout(() => {
      const container = containerRef.current
      if (!container) return

      const stepWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft

      // Calcula el paso más cercano
      const nearestStep = Math.round(scrollLeft / stepWidth)

      goToStep(nearestStep)
    }, 100)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX

    if (Math.abs(diff) < 50) {
      // Si no hay swipe fuerte, solo snap al paso más cercano
      handleScroll()
      return
    }

    if (diff > 0 && currentStep < app.steps.length - 1) {
      goToStep(currentStep + 1)
    } else if (diff < 0 && currentStep > 0) {
      goToStep(currentStep - 1)
    }
  }

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

        <StepsContainer
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
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
                <img src={step.image} alt={`Step ${index + 1}`} />
              )}
            </StepWrapper>
          ))}
        </StepsContainer>

        <DotsWrapper>
          {app.steps.map((_, i) => (
            <Dot
              key={i}
              active={i === currentStep}
              onClick={() => goToStep(i)}
            />
          ))}
        </DotsWrapper>
      </PageWrapper>
    </PageTransition>
  )
}
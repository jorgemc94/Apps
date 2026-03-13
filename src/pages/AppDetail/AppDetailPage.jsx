import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { apps } from "../../data/apps";
import { commonstep } from "../../data/commonstep";
import {
  PageWrapper,
  StepsViewport,
  StepsTrack,
  StepWrapper,
  StepVideo,
  StepImage,
  StepText,
  TextBlock,
  StepParagraph,
  StyledLink,
  ProgressBarWrapper,
  ProgressBar,
} from "./AppDetailStyled";
import {
  PageTransition,
  pageVariants,
  pageTransition,
} from "../../styles/PageTransition";
import { Title } from "../../styles/Typography";
import { motion } from "framer-motion";
import { UpdateURL } from "../../components/UpdateURL/UpdateURLComponent";

export function AppDetail() {
  const { id } = useParams();
  const app = apps.find((a) => a.id === id);

  const [currentStep, setCurrentStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const stepRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!app) return <p style={{ padding: "1rem" }}>App no encontrada</p>;

  const allSteps = [
    ...commonstep,
    ...(app.requiresUrlUpdate ? UpdateURL : []),
    ...app.steps,
  ];

  const nextStep = () => {
    if (currentStep < allSteps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  let touchStartX = 0;
  let touchCurrentX = 0;

  const handleTouchStart = (e) => {
    if (isDesktop) return;
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (isDesktop) return;
    touchCurrentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isDesktop) return;

    const diff = touchStartX - touchCurrentX;

    if (diff > 50) nextStep();
    else if (diff < -50) prevStep();
  };

  useEffect(() => {
    if (!isDesktop && stepRefs.current[currentStep]) {
      const textContainer =
        stepRefs.current[currentStep].querySelector("div[hasTable]");
      if (textContainer) textContainer.scrollTop = 0;
    }
  }, [currentStep, isDesktop]);

  const progress = ((currentStep + 1) / allSteps.length) * 100;

  const renderFormattedText = (text) => {
    const blocks = text.split("\n\n");

    return blocks.map((block, i) => {
      let type = null;

      if (block.trim().startsWith("📱")) type = "mobile";
      if (block.trim().startsWith("📺")) type = "tv";

      return (
        <TextBlock key={i} type={type}>
          <StepParagraph>{block}</StepParagraph>
        </TextBlock>
      );
    });
  };

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

        <StepsViewport
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <StepsTrack
            as={motion.div}
            animate={isDesktop ? { x: 0 } : { x: `-${currentStep * 100}%` }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {allSteps.map((step, index) => {
              const isTableStep = step.content !== undefined;

              return (
                <StepWrapper
                  key={index}
                  hasTable={isTableStep}
                  ref={(el) => (stepRefs.current[index] = el)}
                >
                  {step.video && (
                    <StepVideo
                      src={step.video}
                      controls
                      playsInline
                      preload="auto"
                    />
                  )}

                  {!step.video && step.image && (
                    <StepImage src={step.image} alt={`Paso ${index + 1}`} />
                  )}

                  {(step.text || step.link || step.content) && (
                    <StepText hasTable={isTableStep}>
                      {step.text && renderFormattedText(step.text)}

                      {step.link && (
                        <StyledLink
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {step.linkLabel}
                        </StyledLink>
                      )}

                      {step.content && step.content}
                    </StepText>
                  )}
                </StepWrapper>
              );
            })}
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
  );
}
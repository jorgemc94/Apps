import React from "react";
import { StepWrapper, StepVideo, StepImage, StepText, TextBlock, StepParagraph, StyledLink } from "../../pages/AppDetail/AppDetailStyled";
import { commonstep } from "../../data/commonstep";
import { Title, Subtitle } from "../../styles/Typography";

export function CommonSteps() {
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
    <div>
    <Title> Paso Inicial </Title>
    <Subtitle>Para mayor comodiad a la hora de actualizar vuestras listas y aplicaciones, este es el primer paso que haría antes de comenzar. Esto solo hay que hacerlo una vez.</Subtitle>
      {commonstep.map((step, index) => (
        <StepWrapper key={index} hasTable={step.content !== undefined}>
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
            <StepText hasTable={step.content !== undefined}>
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
      ))}
    </div>
  );
}
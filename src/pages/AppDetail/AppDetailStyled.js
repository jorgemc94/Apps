import styled from "styled-components";
import { motion } from "framer-motion";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    overflow-y: auto;
  }
`;

export const StepsViewport = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: auto;
    max-width: 900px;
    margin: 0 auto;
    overflow: visible;
  }
`;

export const StepsTrack = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

export const StepWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto 2rem auto;
  }
`;

export const StepVideo = styled.video`
  width: 100%;
  max-height: 50vh;
  border-radius: 12px;
  object-fit: contain;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    width: 100%;
    max-height: 500px;
    margin-bottom: 1rem;
  }
`;

export const StepImage = styled.img`
  width: 100%;
  max-height: 50vh;
  border-radius: 12px;
  object-fit: contain;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    width: 100%;
    max-height: 500px;
    margin-bottom: 1rem;
  }
`;

export const StepText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;

  ${({ hasTable }) =>
    hasTable &&
    `
    max-height: 50vh;
    overflow-y: auto;
    padding-bottom: 0;
  `}

  @media (min-width: 1024px) {
    max-height: none;
    overflow: visible;
  }
`;

export const TextBlock = styled.div`
  background: ${({ type }) =>
    type === "mobile"
      ? "rgba(99, 102, 241, 0.08)"
      : type === "tv"
      ? "rgba(16, 185, 129, 0.08)"
      : "transparent"};

  border-left: ${({ type }) =>
    type === "mobile"
      ? "4px solid #6366f1"
      : type === "tv"
      ? "4px solid #10b981"
      : "none"};

  padding: ${({ type }) => (type ? "0.75rem 1rem" : "0")};
  border-radius: 8px;
`;

export const StepParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  white-space: pre-line;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  align-self: center;

  @media (min-width: 1024px) {
    align-self: flex-start;
  }
`;

export const ProgressBarWrapper = styled.div`
  height: 6px;
  width: 100%;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 1rem;
`;

export const ProgressBar = styled(motion.div)`
  height: 100%;
  background: #6366f1;
  width: 0%;
`;
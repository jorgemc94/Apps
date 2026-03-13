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
    padding: 2rem 1rem;
  }
`;

export const StepsViewport = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;

  @media (min-width: 1024px) {
    position: relative;
    height: auto;
    max-width: 900px;
    margin: 0 auto;
    overflow: visible;

    /* línea timeline */
    &:before {
      content: "";
      position: absolute;
      left: -40px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--card);
    }
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
    gap: 2rem;
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
    position: relative;
    background: var(--card);
    border-radius: 16px;
    padding: 2rem;
    margin: 0 auto;
    max-width: 900px;

    box-shadow: 
      0 1px 2px rgba(0,0,0,0.04),
      0 8px 24px rgba(0,0,0,0.06);

    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 2px 6px rgba(0,0,0,0.06),
        0 12px 32px rgba(0,0,0,0.08);
    }

    /* punto timeline */
    &:before {
      content: "";
      position: absolute;
      left: -48px;
      top: 30px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--primary);
      box-shadow: 0 0 0 4px var(--background);
    }
  }
`;

export const StepVideo = styled.video`
  width: 100%;
  max-height: 50vh;
  border-radius: 12px;
  object-fit: contain;
  margin-bottom: 2.5rem;

  @media (min-width: 1024px) {
    width: 100%;
    max-height: 520px;
    margin-bottom: 2rem;
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
    max-height: 520px;
    margin-bottom: 2rem;
  }
`;

export const StepText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;

  ${({ hasTable }) =>
    hasTable &&
    `
    max-height: 50vh;
    overflow-y: auto;
    padding-bottom: 0;
  `}

  @media (min-width: 1024px) {
    gap: 1.2rem;
    font-size: 1.05rem;
    line-height: 1.6;
    max-height: none;
    overflow: visible;
  }
`;

export const TextBlock = styled.div`
  background: ${({ type }) =>
    type === "mobile"
      ? "rgba(99,102,241,0.08)"
      : type === "tv"
      ? "rgba(16,185,129,0.08)"
      : "transparent"};

  border-left: ${({ type }) =>
    type === "mobile"
      ? "4px solid #6366f1"
      : type === "tv"
      ? "4px solid #10b981"
      : "none"};

  padding: ${({ type }) => (type ? "0.9rem 1.1rem" : "0")};
  border-radius: 10px;
`;

export const StepParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  white-space: pre-line;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const StyledLink = styled.a`
  padding: 0.6rem 1.1rem;
  background-color: var(--primary);
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  align-self: center;
  transition: background 0.2s;

  &:hover {
    background: #4f46e5;
  }

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
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
  height: 100%;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100dvh;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  /* Para los pasos de tabla (UpdateURL) en móvil */
  ${({ hasTable }) =>
    hasTable &&
    `
    overflow-y: auto;
  `}

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    max-width: 900px;
    margin: 0 auto 2rem auto;

    /* En desktop, mostrar la tabla completa sin scroll */
    ${({ hasTable }) =>
      hasTable &&
      `
      overflow: visible;
      flex-direction: column; /* para que la tabla quede arriba y texto abajo si quieres */
      align-items: flex-start;
    `}
  }
`;

export const StepVideo = styled.video`
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
  flex: 0 0 70%;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    flex: none;
    max-height: 400px;
    margin-bottom: 0;
  }
`;

export const StepImage = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
  flex: 0 0 70%;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    flex: none;
    max-height: 400px;
    margin-bottom: 0;
  }
`;

export const StepText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 0 0 30%;
  width: 100%;
  justify-content: flex-start;

  /* Para pasos con tabla en móvil */
  ${({ hasTable }) =>
    hasTable &&
    `
    max-height: 50%;
    overflow-y: auto;
  `}

  @media (min-width: 1024px) {
    flex: none;
    width: ${({ hasTable }) => (hasTable ? "100%" : "calc(100% - 500px)")};
    justify-content: ${({ hasTable }) => (hasTable ? "flex-start" : "center")};
    margin-left: ${({ hasTable }) => (hasTable ? "0" : "1em")};
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
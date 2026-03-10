import styled from "styled-components"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;

  @media (min-width: 1024px) {
    overflow-y: auto;
  }
`

export const StepsViewport = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    overflow: visible;
  }
`

export const StepsTrack = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;

  @media (min-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`

export const StepWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    flex: none;
    height: auto;
    margin-bottom: 3rem;
    flex-direction: row;
    justify-content: center;
    gap: 5em;
    align-items: center;
  }

  img {
    max-width: 90%;
    max-height: 70%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      max-width: 45%;
      max-height: 450px;
      margin: 0;
    }
  }
`

export const StepText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

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
`

export const StepParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  white-space: pre-line;

  @media (min-width: 1024px) {
    text-align: left;
  }
`

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
`

export const ProgressBarWrapper = styled.div`
  height: 6px;
  width: 100%;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 1rem;
`

export const ProgressBar = styled(motion.div)`
  height: 100%;
  background: #6366f1;
  width: 0%;
`
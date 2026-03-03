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
`

export const StepsViewport = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;

  @media (min-width: 1024px) {
    overflow-y: auto;     /* permitir scroll vertical */
    overflow-x: hidden;
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
  }

  img {
    max-width: 90%;   
    max-height: 70%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .text-link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    p {
      text-align: center;
      font-size: 1rem;
      line-height: 1.4;
      margin: 0;
      word-break: break-word;
    }

    a {
      padding: 0.5rem 1rem;
      background-color: var(--primary);
      color: #fff;
      font-weight: 600;
      border-radius: 8px;
      text-decoration: none;
      white-space: nowrap;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    img {
      max-height: unset;
      max-width: 45%;
      margin: 0;
    }

    .text-link-wrapper p {
      text-align: left;
    }
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
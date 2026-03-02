import styled from "styled-components"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const StepsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;       /* nada de scroll vertical */
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 1rem 0;
  flex: 1;

  & > div {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    scroll-snap-align: start; /* snap al inicio */
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    overflow: visible;
    gap: 4rem;

    & > div {
      flex: unset;
    }
  }
`

export const StepWrapper = styled(motion.div)`
  background: var(--card);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  height: 100dvh;               
  justify-content: space-between;

  img {
    max-width: 100%;
    max-height: 50%;         
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
    padding: 0 0.5rem;

    p {
      margin: 0;
      text-align: center;
      font-size: 1rem;
      line-height: 1.4;
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
    align-items: flex-start;
    justify-content: space-between;

    img {
      max-height: unset;
      max-width: 45%;
      margin: 0;
    }
  }
`

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#6366f1" : "#ccc")};
  cursor: pointer;
  transition: background 0.3s ease;
`
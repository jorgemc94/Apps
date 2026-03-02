import styled from "styled-components"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  padding: 1rem;
`

export const StepsContainer = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 1rem 0;

  & > div {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
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
  padding: 2rem;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    object-fit: contain;
  }

  .text-link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    max-width: 600px;
    width: 100%;

    p {
      margin: 0;
      text-align: center;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    a {
      padding: 0.6rem 1.2rem;
      background-color: var(--primary);
      color: #fff !important;
      font-weight: 600;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: 0 2px 8px rgb(0 123 255 / 0.4);
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    a:hover {
      background-color: #6366f1;
      box-shadow: 0 4px 12px rgb(0 86 179 / 0.6);
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;

      p {
        text-align: left;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    img {
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
import styled from "styled-components"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  padding: 1rem;
`

export const StepsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;

  & > div {
    min-width: 80%;
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StepWrapper = styled(motion.div)`
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    border-radius: 12px;
    margin-top: 0.5rem;
  }
`
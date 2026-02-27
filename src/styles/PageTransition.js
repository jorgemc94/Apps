import { motion } from "framer-motion"
import styled from "styled-components"

export const PageTransition = styled(motion.div)`
  width: 100%;
`

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const pageTransition = {
  duration: 0.35,
  ease: "easeInOut"
}
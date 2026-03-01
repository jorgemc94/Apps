import styled, { keyframes } from "styled-components"

export const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;
  padding: 1rem 0;
`

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(-15deg); }
  30% { transform: rotate(15deg); }
  45% { transform: rotate(-10deg); }
  60% { transform: rotate(10deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`

export const WhatsApp = styled.a`
  padding: 0.6rem 1.2rem;
  background-color: #25D366;
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  svg {
    font-size: 1.2rem;
    margin-right: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover,
  &:focus {
    background-color: #1EBE55;
    box-shadow: 0 4px 12px rgb(0 86 179 / 0.6);
    outline: none;

    svg {
      animation: ${wiggle} 0.6s ease-in-out;
    }
  }
`
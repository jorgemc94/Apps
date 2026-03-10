import styled, { keyframes } from "styled-components"

export const ContactWrapper = styled.section`
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
  padding: 0.6rem 0;
  width: 20%;
  margin: 0 auto;
  background-color: #25D366;
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  display: flex;
  justify-content: center;     
  align-items: center;         

  svg {
    font-size: 2rem;           
    margin: 0;                 
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

  @media (min-width: 1024px) {
    width: 4%;
    svg {
      font-size: 2em;
    }
  }
`
export const Telegram = styled.a`
  padding: 0.6rem 0;
  width: 20%;
  margin: 0 auto;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#1f8acb" : "#229ED9"};
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
    margin: 0;
    transition: transform 0.3s ease;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#1877ad" : "#1c8ec9"};
    box-shadow: 0 4px 12px rgba(34, 158, 217, 0.6);
    outline: none;

    svg {
      animation: ${wiggle} 0.6s ease-in-out;
    }
  }

  @media (min-width: 1024px) {
    width: 4%;

    svg {
      font-size: 2em;
    }
  }
`
;
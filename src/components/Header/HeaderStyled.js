import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--text);
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.9);
  }
`
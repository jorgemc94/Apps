import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  padding: 1rem;

  @media(min-width:768px){
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = styled.div`
  background: var(--card);
  border-radius: 20px;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  }
`

export const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  object-fit: cover;
`

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const AppName = styled.h3`
  font-size: 1rem;
`

export const AppDescription = styled.p`
  font-size: 0.85rem;
  opacity: 0.7;
`
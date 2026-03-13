import styled from "styled-components"

export const TableWrapper = styled.section`
  width: 100%;
  overflow-x: auto;
  max-height: none !important;
  overflow-y: visible !important;

  @media (max-width: 1023px) {
    max-height: none !important;
    overflow-y: visible !important;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`

export const TableHead = styled.thead`
  background: var(--card);
`

export const TableRow = styled.tr``

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  font-weight: 600;
  color: var(--text);

  &:first-child {
    width: 40%;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`

export const TableBody = styled.tbody``

export const TableData = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid var(--card);
  color: var(--text);
  word-break: break-word;

  a {
    color: var(--primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &:first-child {
    font-weight: 500;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`

export const StepsList = styled.ul`
  margin: 1rem 0 1.5rem 0;
  padding-left: 1.2rem;
  color: var(--text);

  li {
    margin-bottom: 1rem;
    padding: 0.6rem 0.8rem;
    background: var(--card);
    border-radius: 6px;
    list-style: decimal;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    word-break: break-word;
  }
`

export const StepVideo = styled.video`
  width: 100%;
  max-height: 50vh;
  border-radius: 12px;
  object-fit: contain;
  margin-bottom: 2.5rem;

  @media (min-width: 1024px) {
    width: 100%;
    max-height: 520px;
    margin-bottom: 2rem;
  }
`
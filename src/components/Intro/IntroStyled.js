import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: var(--card);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const StepList = styled.ol`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  list-style: none;
`;

export const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  &::before {
    content: "${props => props.number}";
    font-weight: bold;
    color: var(--primary);
    min-width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  p {
    line-height: 1.6;
    color: var(--text);
    flex: 1;
  }

  strong {
    color: var(--primary);
  }
`;

export const Note = styled.p`
  margin-top: 20px;
  font-style: italic;
  color: var(--text);
`;
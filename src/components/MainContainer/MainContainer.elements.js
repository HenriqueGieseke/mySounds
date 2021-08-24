import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const MainBox = styled.main`
  width: 100%;
  margin-top: 3.54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 1.44rem;
  text-align: center;
  margin-bottom: 4.5rem;
  animation: ${FadeIn} 1.5s ease;
`;

export const MusicsBox = styled.div`
  min-width: 670px;
  max-width: 800px;
  min-height: 221.6px;
  margin-bottom: 3rem;
  width: 50%;
  background: #ffffff;
  box-shadow: 1px 4px 6px 3px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 2.1rem;
  transition: all 0.3s;
  animation: ${FadeIn} 1s ease;

  & > *:not(:last-child) {
    margin-bottom: 1.02rem;
  }
`;

export const NextButton = styled.button`
  width: 100%;
  text-align: center;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-bottom: solid 3px #fff;
  transition: all 0.5s;
  padding-bottom: 0.6rem;

  &:hover {
    border-bottom: solid 3px #000;
  }
`;

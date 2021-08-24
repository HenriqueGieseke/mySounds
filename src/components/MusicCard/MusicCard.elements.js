import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const MusicCardBox = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 1.2rem 3.66rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  position: relative;
  animation: ${FadeIn} 2s ease;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const InfoWrapper = styled.div`
  height: 100%;
  margin: 0 0.6rem;

  h3 {
    font-weight: 500;
    margin-bottom: 1.38rem;
  }
`;

export const InfoText = styled.span`
  display: block;
  font-size: ${({ artist }) => (artist ? '0.84rem' : '0.66rem')};
  margin-bottom: ${({ artist }) => (artist ? '1.38rem' : '0')};
`;

export const AlbumImg = styled.img`
  height: 100%;
  animation: ${FadeIn} 3s ease;
`;

export const PreviewWrapper = styled.div`
  height: 4.68rem;
  width: 6.3rem;
  padding: 0.6rem;
  margin-right: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #ffffff;
  border-radius: 5px;

  span {
    font-size: 0.84rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.6rem;
  }

  button {
    height: 0.9rem;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  button:not(:last-child) {
    margin-right: 0.78rem;
  }

  audio {
    width: 90px;
  }

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display,
  audio::-webkit-media-controls-timeline {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeezerButton = styled.a`
  background: #000000;
  border-radius: 5px;
  text-align: center;
  font-size: 0.5rem;
  font-weight: 500;
  padding: 0.54rem 0.66rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;

  transition: all 0.4s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const AddFavButton = styled.button`
  height: 1.2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const AddFavIcon = styled.img`
  height: 1.2rem;
`;

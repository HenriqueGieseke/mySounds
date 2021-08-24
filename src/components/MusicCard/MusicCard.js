import React from 'react';
import {
  MusicCardBox,
  AlbumImg,
  InfoWrapper,
  InfoText,
  PreviewWrapper,
  DeezerButton,
  AddFavIcon,
  AddFavButton,
} from './MusicCard.elements.js';
import addFavIcon from '../../assets/add-fav-star.svg';
import removeFavIcon from '../../assets/remove-fav-star.svg';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../store/storeActions.js';

const MusicCard = ({ track, favorite }) => {
  const dispatch = useDispatch();

  const addFavorite = () => {
    dispatch(addToFavorite(track));
  };

  const removeFavorite = () => {
    dispatch(removeFromFavorite(track));
  };

  return (
    <MusicCardBox>
      <AlbumImg src={track.album.cover} alt="Album cover" />
      <InfoWrapper>
        <h3>{track.title}</h3>
        <InfoText artist={true}>{track.artist.name}</InfoText>
        <InfoText>Duração: {track.duration} segs</InfoText>
      </InfoWrapper>
      <PreviewWrapper>
        <span>Preview</span>
        <audio controls src={track.preview}></audio>
      </PreviewWrapper>
      <DeezerButton target="_blank" href={track.link}>
        Deezer
        <br />
        Música
        <br />
        completa
      </DeezerButton>
      <AddFavButton onClick={favorite ? removeFavorite : addFavorite}>
        <AddFavIcon
          src={favorite ? removeFavIcon : addFavIcon}
          al="favorite star"
        />
      </AddFavButton>
    </MusicCardBox>
  );
};

export default MusicCard;

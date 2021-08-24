import React, { useEffect, useState } from 'react';
import {
  PageTitle,
  MusicsBox,
  MainBox,
  NextButton,
} from './MainContainer.elements';
import MusicCard from '../MusicCard/MusicCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { incrementQueryIndex, nextTracks } from '../../store/storeActions';
import Spinner from '../Spinner/Spinner';

const MainContainer = ({ trackList, favorite }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const query = useSelector((state) => state.query);
  const queryIndex = useSelector((state) => state.queryIndex);
  const [topMusics, setTopMusics] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get('/chart');

    setTopMusics(data.tracks.data);
    setLoading(false);
  };

  const fetchNextSongs = async () => {
    const { data } = await axios.get(`/search?q=${query}&index=${queryIndex}`);

    dispatch(incrementQueryIndex());
    dispatch(nextTracks(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (trackList.length > 0) {
    return (
      <MainBox>
        <PageTitle>Músicas encontradas</PageTitle>

        <MusicsBox>
          {loading ? (
            <Spinner />
          ) : (
            trackList.map((track) => {
              return <MusicCard key={track.id} track={track} />;
            })
          )}
          <NextButton onClick={fetchNextSongs}>Mais músicas</NextButton>
        </MusicsBox>
      </MainBox>
    );
  } else if (favorite) {
    return (
      <MainBox>
        <PageTitle>Músicas favoritas</PageTitle>

        <MusicsBox>
          {loading ? (
            <Spinner />
          ) : (
            favorites.map((track) => {
              return (
                <MusicCard key={track.id} track={track} favorite={favorite} />
              );
            })
          )}
        </MusicsBox>
      </MainBox>
    );
  } else {
    return (
      <MainBox>
        <PageTitle>Principais músicas do momento</PageTitle>

        <MusicsBox>
          {loading ? (
            <Spinner />
          ) : (
            topMusics.map((track) => {
              return <MusicCard key={track.id} track={track} />;
            })
          )}
        </MusicsBox>
      </MainBox>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    trackList: state.tracks,
  };
};

export default connect(mapStateToProps)(MainContainer);

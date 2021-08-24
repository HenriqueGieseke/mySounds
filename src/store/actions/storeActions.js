import axios from 'axios';

export const searchTracks = (query) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/search?q=${query}`);
    const trackList = data.data;

    dispatch({
      type: 'SEARCH_TRACKS',
      payload: trackList,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextTracks = (tracks) => {
  return {
    type: 'NEXT_TRACKS',
    payload: tracks,
  };
};

export const clearTracks = () => {
  return {
    type: 'CLEAR_TRACKS',
  };
};

export const addToFavorite = (track) => {
  return {
    type: 'ADD_TO_FAVORITE',
    payload: track,
  };
};

export const setQuery = (query) => {
  return {
    type: 'SET_QUERY',
    payload: query,
  };
};

export const incrementQueryIndex = () => {
  return {
    type: 'INCREMENT_QUERY_INDEX',
  };
};

export const removeFromFavorite = (track) => {
  return {
    type: 'REMOVE_FROM_FAVORITE',
    payload: track,
  };
};

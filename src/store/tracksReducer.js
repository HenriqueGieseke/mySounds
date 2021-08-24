const initialState = [];

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return action.payload;

    case 'CLEAR_TRACKS':
      return (state = []);

    case 'NEXT_TRACKS':
      return [...state, ...action.payload];

    default:
      return state;
  }
}

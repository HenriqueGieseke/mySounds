const initialState = '';

export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return action.payload;

    default:
      return state;
  }
}

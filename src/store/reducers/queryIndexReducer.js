let initialState = '25';

export default function queryIndexReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_QUERY_INDEX':
      state = Number(state);
      state = state + 25;
      state = state.toString();
      return state;

    default:
      return state;
  }
}

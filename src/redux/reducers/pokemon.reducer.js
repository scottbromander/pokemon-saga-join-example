const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return action.payload;
    case 'CLEAR_POKEMON':
      return [];
    default:
      return state;
  }
};

export default pokemonReducer;

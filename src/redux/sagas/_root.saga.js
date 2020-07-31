import { takeEvery } from 'redux-saga/effects';
import getPokemon from './pokemon.saga';

function* rootSaga() {
  yield takeEvery('GET_POKEMON', getPokemon);
}

export default rootSaga;

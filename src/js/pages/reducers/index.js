import {combineReducers} from 'Redux';
import KittenReducer from './Kitten-Reducer';

const allReducers = combineReducers({
  kittens:KittenReducer
});

export default allReducers;

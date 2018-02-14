import { combineEpics } from 'redux-observable';

import DrinkEpic from './drinkEpic'

const rootEpic = combineEpics(
    DrinkEpic.getDrinkEpic,
    DrinkEpic.getDrinkDetailsEpic
);

export default rootEpic;
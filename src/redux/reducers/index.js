import { combineReducers } from 'redux';
import hotSpot from './hotSpot';

const allReducers = combineReducers([
    hotSpot,
])

const rootReducer = (stateReceived, action) => allReducers(stateReceived, action);

export default rootReducer;

import { combineReducers } from 'redux';
import hotSpot from './hotSpot';
import createHotSpot from './createHotSpot';

const allReducers = combineReducers({
    hotSpot,
    createHotSpot,
})

const rootReducer = (stateReceived, action) => allReducers(stateReceived, action);

export default rootReducer;

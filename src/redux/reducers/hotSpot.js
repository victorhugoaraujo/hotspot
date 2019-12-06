// import {ADD_HOTSPOT} from '../actions/hotSpot';

const initialState = {
	hotSpot: [],
};

export default function hotSpot(state = initialState, action) {
    switch (action.type) {
			case 'ADD_HOTSPOT':
					return { 
						...state,
						hotSpot: [...state.hotSpot, action.hotSpot]
				}
				
			default:
				return state;
		}
  }
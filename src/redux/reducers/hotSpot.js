import {ADD_HOTSPOT} from '../actions/hotSpot';

export default function hotSpot(state = [], action) {
    switch (action.type) {
			case ADD_HOTSPOT:
					// return [ 
					// 	...state,
					// 	action.hotSpot
					// ]
					return [
						...state, action.hotSpot,
					]
				
			default:
				return state;
		}
  }
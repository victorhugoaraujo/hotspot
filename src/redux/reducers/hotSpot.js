import { ADD_HOTSPOT } from '../actions/hotSpot';
import { REMOVE_HOTSPOT } from '../actions/hotSpot';

export default function hotSpot(state = [], action) {
	console.log(state)
    switch (action.type) {
			case ADD_HOTSPOT:
					return [
						...state,
						action.hotSpot,
					]
			case REMOVE_HOTSPOT:
				return state.filter(({id}) => id !== action.hotSpot);
				
			default:
				return state;
		}
  }
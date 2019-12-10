import { CREATE_HOTSPOT } from '../actions/hotSpot';

const initialState = {
	creating: false,
}
export default function createHotSpot(state = initialState, action){
	switch (action.type) {
		case CREATE_HOTSPOT:
				return {
					...state,
					creating: action.create,
				}
		default:
			return state;
	}
}
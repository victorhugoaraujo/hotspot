import { ADD_HOTSPOT, ADD_HOTSPOT_INFO, REMOVE_HOTSPOT } from '../actions/hotSpot';

export default function hotSpot(state = [], action) {
    switch (action.type) {
			case ADD_HOTSPOT:
					return [
						...state,
						action.hotSpot,
					]
			case REMOVE_HOTSPOT:
				return state.filter(({number}) => number !== action.number);
			case ADD_HOTSPOT_INFO:
				const hotspotInfo = state.map((item => {
					// editing one item
					if (item.number === action.info.id) {
						return Object.assign({}, item, { title: action.info.title, text: action.info.text })
					}
					// return all the ones we're not changing
					return item
				}))
				return [
					...hotspotInfo
				]
			default:
				return state;
		}
	}

export const ADD_HOTSPOT = 'ADD_HOTSPOT';
export const REMOVE_HOTSPOT = 'REMOVE_HOTSPOT';
export const ADD_HOTSPOT_INFO = 'ADD_HOTSPOT_INFO';
export const CREATE_HOTSPOT = 'CREATE_HOTSPOT';

export const addHotSpotAction = hotSpot => ({ type: ADD_HOTSPOT, hotSpot });
export const removeHotSpotAction = number => ({ type: REMOVE_HOTSPOT, number });
export const addHotSpotInfoAction = info => ({ type: ADD_HOTSPOT_INFO, info });
export const createHotSpotAction = create => ({ type: CREATE_HOTSPOT, create });

  
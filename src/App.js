import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware';
import reducer from './redux/reducers';
import HotSpot from './components/HotSpot';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadState, saveState } from './localStorage.js';

// Load State from localStorage
const persistedState = loadState();
const store = createStore(reducer, persistedState, middleware);

// Add state to localStorage
store.subscribe(() => {
  saveState({
    hotSpot: store.getState().hotSpot});
});

function App() {
  return (
    <Provider store={store}>
     <HotSpot />
    </Provider>
  );
}

export default App;

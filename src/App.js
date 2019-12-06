import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware';
import reducer from './redux/reducers';
import HotSpot from './components/HotSpot';

const store = createStore(reducer, middleware);

function App() {
  return (
    <Provider store={store}>
     <HotSpot />
    </Provider>
  );
}

export default App;

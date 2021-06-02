import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Redux/Counter';
import reducer from './Redux/store';

const store = createStore(reducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <Counter />
        <Counter />
      </Provider>
    </div>
  );
}

export default App;

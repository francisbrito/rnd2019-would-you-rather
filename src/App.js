import React from 'react';
import { Provider } from 'react-redux';

import { AppContainer } from './containers';
import { createStore } from './reducers';

const { store } = createStore();

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;

import { action } from '@storybook/addon-actions';
import faker from 'faker';
import React from 'react';
import { Provider } from 'react-redux';
import { saveProfileAction } from '../actions';
import SignInPage from '../containers/SignInPage';

import '../index.css';

import { createStore } from '../reducers';

export default {
  title: 'Sign In Page'
};

export const basic = () => {
  return (
    <Provider store={createStore()}>
      <SignInPage onSelectProfile={action('onSelectProfile')} />
    </Provider>
  );
};

export const withSavedProfiles = () => {
  const store = createStore();

  Array.from(new Array(3))
    .map(() => ({
      id: faker.random.uuid(),
      playerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      playerPicture: faker.image.avatar()
    }))
    .forEach(sp => {
      store.dispatch(saveProfileAction(sp));
    });

  return (
    <Provider store={store}>
      <SignInPage
        savedProfiles={Array.from(new Array(3)).map(() => ({
          id: faker.random.uuid(),
          playerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
          playerPicture: faker.image.avatar()
        }))}
        onSelectProfile={action('onSelectProfile')}
      />
    </Provider>
  );
};

import Navgatior from '@/navigator/index';
import {Provider} from 'react-redux';
import React from 'react';
import store from '@/config/dva';
import {StatusBar} from 'react-native';

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navgatior />
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
      </Provider>
    );
  }
}

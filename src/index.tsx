import Navgatior from '@/navigator/index';
import {Provider} from 'react-redux';
import React from 'react';
import store from '@/config/dva';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'} }>
        <StatusBar backgroundColor="red" barStyle="dark-content" />
        <Provider store={store}>
          <Navgatior />
        </Provider>
      </SafeAreaView>
    );
  }
}

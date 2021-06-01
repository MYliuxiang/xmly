import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail';
import BottomTabs from '@/navigator/BottomTabs';

export type RootStackParamList = {
    BottomTabs: {
      screen?: string;
    };
    Detail: {
      id?:number,
    };
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

class Navgatior extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navgatior;

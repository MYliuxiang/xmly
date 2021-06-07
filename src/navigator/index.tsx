import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigationState,
} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import BottomTabs from '@/navigator/BottomTabs';
import {StatusBarHeight} from '@/untils/LxLayout';
import {
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  StatusBarIOS,
} from 'react-native';
import Login from '@/pages/Login/Login';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  MDetail: {
    id?: number;
  };
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

export type ModalStackParmList = {
  Root: undefined;
  Detail: {
    id?: number;
  };
  Login: undefined;
};

export type ModalStackNavigationProp = StackNavigationProp<ModalStackParmList>;

const ModalStack = createStackNavigator<ModalStackParmList>();

function ModalStackScreen() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={() => ({
        ...TransitionPresets.ModalSlideFromBottomIOS,
        cardOverlayEnabled: true,
        gestureEnabled: true,
        // headerStatusBarHeight:StatusBarHeight,
        headerBackTitleVisible: false,
        headerTintColor:'#333'
      })}>
      <ModalStack.Screen
        name="Root"
        component={RootStackScreen}
        options={{headerShown: false}}
      />
      <ModalStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: '详情',
        }}
      />

      <ModalStack.Screen
        name='Login'
        component={Login}
        options={{
          headerTitle: '登录',
        }}
      />
    </ModalStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // headerStatusBarHeight: StatusBarHeight,
        headerStyle: {
          ...Platform.select({
            android: {
              elevation: 0,
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          }),
        },
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="MDetail" component={Detail} />
    </Stack.Navigator>
  );
}

class Navgatior extends React.Component {
  navigationStateChange = (state: NavigationState | undefined) => {
    if (state) {
      console.log(state);
      const {routeNames, index, routes} = state;
      let name: string = '';
      let sroute = routes[index];
      if (sroute.state) {
        let broute = sroute.state.routes[sroute.state.index!];
        console.log(broute);
        while (broute.state) {
          broute = broute.state.routes[broute.state.index!];
          name = broute.name;
          console.log(name);
        }
      } else {
        name = routeNames[index];
      }

      console.log(name);
    }
  };

  render() {
    return (
      <NavigationContainer onStateChange={this.navigationStateChange}>
        <ModalStackScreen />
      </NavigationContainer>
    );
  }
}

export default Navgatior;

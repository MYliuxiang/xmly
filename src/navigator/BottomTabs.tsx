import React from 'react';
import Listen from '@/pages/Listen';
import Home from '@/pages/Home';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigationState,
  PartialState,
  Route,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackNavigationProp, RootStackParamList} from '.';
import { Alert } from 'react-native';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();


interface IProps {
    navigation: RootStackNavigationProp;
    // route: RouteProp<RootStackParamList, 'BottomTabs'> & {
    //     state?: TabNavigationState<RootStackParamList>;
    // };

  //   route: Partial<Route<string>> & {
  //     state?: PartialState<NavigationState>;
  // }
     route:Partial<Route<string>> & {
          state?:PartialState<NavigationState>
     }

}

function getHeaderTitle(routeName:string | undefined){
    switch(routeName){
        case 'Home':
            return '主页';
        case 'Listen':
            return '我听';
         case 'Found':
            return '发现'; 
        case 'Account':
            return '我的';
        default:
            return ''; 
    }
}

class BottomTabs extends React.Component<IProps> {
  
  componentDidUpdate() {
    const {navigation,route} = this.props;


    const routeState = getFocusedRouteNameFromRoute(route);
    // const routeName = route.state
    // ? route.state.routes[route.state.index].name
    // : route.params
    // ? route.params.screen
    // : 'Home';
    //  navigation.setOptions({
    //     headerTitle: getHeaderTitle(routeName),
    //     headerTransparent: false,
    //   });
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}  options={{
            tabBarLabel: '首页',
          }}/>
        <Tab.Screen name="Listen" component={Listen} options={{
            tabBarLabel: '我听',
          }}/>
        <Tab.Screen name="Found" component={Found} options={{
            tabBarLabel: '发现',
          }}/>
        <Tab.Screen name="Account" component={Account} options={{
            tabBarLabel: '我的',
          }}/>
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
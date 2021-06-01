import React from 'react';
import Listen from '@/pages/Listen';
import Home from '@/pages/Home/Home';
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
import { color } from 'react-native-reanimated';
import IconFont from '@/assets/iconfont/index';
import HomeTabs from './HomeTabs';


export type BottomTabParamList = {
  HomeTabs: undefined;
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
        case 'HomeTabs':
            return '';
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
        <Tab.Screen name="HomeTabs" component={HomeTabs}  options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-u138" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen name="Listen" component={Listen} options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-ting" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Found" component={Found} options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-u138" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Account" component={Account} options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-wode" color={color} size={size} />
            ),
          }}/>
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;

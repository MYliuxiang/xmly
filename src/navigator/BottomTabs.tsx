import React from 'react';
import Listen from '@/pages/Listen';
import Home from '@/pages/Home';
import Found from '@/pages/Found/Found';
import Account from '@/pages/Login/Account';
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
import {Alert,  SafeAreaView 
} from 'react-native';
import {color} from 'react-native-reanimated';
import IconFont from '@/assets/iconfont/index';
import HomeTabs from './HomeTabs';
import { StatusBarHeight } from '@/untils/LxLayout';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: {id:number,nav:object};
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
  route: Partial<Route<string>> & {
    state?: PartialState<NavigationState>;
  };
}

function getHeaderTitle(routeName: string | undefined) {
  switch (routeName) {
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
  componentDidMount() {
    this.updateNavigation();
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'HomeTabs') {
      navigation.setOptions({
        headerTitle: '',
        // headerShown: true,
        headerTransparent: false

      });
    } else {
      navigation.setOptions({
        headerTitle: getHeaderTitle(routeName),
        // headerShown: false,
        headerTransparent: true

      });
    }
  }


  componentDidUpdate() {
    this.updateNavigation();

  }

  updateNavigation = () => {
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'HomeTabs') {
      navigation.setOptions({
        headerTitle: '',
        // headerShown: false,
        headerTransparent: true
      });
    } else {
      navigation.setOptions({
        headerTitle: getHeaderTitle(routeName),
        headerShown: true,
        headerTransparent: false
      });
    }


  };
  render() {
    return (

      <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#f86442',
      }}>
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-u138" color={color} size={size} />
            ),
          }}
          
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-ting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
         
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-u138" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-wode" color={color} size={size} />
            ),
          }}
          initialParams={{
            id:3,
            nav:this.props.navigation
          }}
        />
      </Tab.Navigator>

    );
  }
}

export default BottomTabs;

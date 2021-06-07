import React, {Component} from 'react';
import {Text, View, StyleSheet,StatusBar} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import {RootState} from '@/models/models';
import {connect, ConnectedProps} from 'react-redux';
import {types} from '@babel/core';
import {ConnectedRouter} from 'react-router-redux';
import {createModel} from '@/config/dva';
import { SafeAreaView } from 'react-native-safe-area-context';

export type HomeTabParamList = {
  [key: string]: {
    modelNamespace: string;
    category: string;
  };
};

export type HomeTabNavigation = MaterialTopTabNavigationProp<HomeTabParamList>;

const Tab = createMaterialTopTabNavigator<HomeTabParamList>();

const mapStateToProps = ({category}: RootState) => {
  return {
    categorys: category.myCategoryList,
  };
};

const connector = connect(mapStateToProps);
type IProps = ConnectedProps<typeof connector>;

function HomeTabs({categorys}: IProps) {
  return (
        <Tab.Navigator
        lazy
        sceneContainerStyle={styles.sceneContainer}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            padding: 0,
            width: 80,
            margin:0,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: 'red',
          },
          activeTintColor: 'red',
          inactiveTintColor: '#000',
        }}>
        {categorys.map(category => {
          createModel('tab-' + category.id);
          return (
            <Tab.Screen
              key={category.id}
              name={'tab-' + category.id}
              component={Home}
              options={{
                tabBarLabel: category.name,
              }}
              initialParams={{
                modelNamespace: 'tab-' + category.id,
                category: category.type,
              }}></Tab.Screen>
          );
        })}
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default connector(HomeTabs);

import { getFocusedRouteNameFromRoute, NavigationState } from "@react-navigation/native";
import React from "react";
import { Dimensions,StatusBar,Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const {width:kScreenW, height:kScreenH} = Dimensions.get('window');

// const StatusBarHeight = Platform.OS === "ios" ? 44 : StatusBar.currentHeight;
const StatusBarHeight = StatusBar.currentHeight;


function findRoutenameFrmNavigatorState({routes,index}:NavigationState){

    // let route = routes[index];
    // const routeName = getFocusedRouteNameFromRoute(route);
   
    // return routeName;
}


export {
    kScreenH,
    kScreenW,
    StatusBarHeight
}
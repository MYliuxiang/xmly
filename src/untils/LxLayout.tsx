import React from "react";
import { Dimensions,StatusBar } from "react-native";

const {width:kScreenW, height:kScreenH} = Dimensions.get('window');
const StatusBarHeight = StatusBar.currentHeight;


export {
    kScreenH,
    kScreenW,
    StatusBarHeight
}
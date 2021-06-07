import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RootStackNavigationProp, RootStackParamList} from '@/navigator/index';
import { RouteProp } from '@react-navigation/native';

interface Iprops {
  navigation:RootStackNavigationProp;
  route:RouteProp<RootStackParamList,'Detail'>
}

class Detail extends Component <Iprops>{
   
  componentDidMount(){
    this.props.navigation.setOptions(
      {
        title:"想法破"
      }
    )
  }


  render() {
    const {route} = this.props;
    return (
      <View>
        <Text> 详情 </Text>
        <Text> 参数：{route.params.id} </Text>
      </View>
    );
  }
}

export default Detail;

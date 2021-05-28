import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {RootStackNavigationProp} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import { NavigationState, PartialState, RouteProp,Route, InitialState } from '@react-navigation/native';
import { ICarousel,HomeModelState } from '@/models/home';
import {RootState} from '@/models/models'

const mapState=({home}: RootState)=>({
  carouselList: home.carouselList,
  activeSlide: home.activeSlide,
  }
);

const connector=connect(mapState)

type MadelState=ConnectedProps<typeof connector>

interface Iprops extends MadelState{
    navigation:RootStackNavigationProp;
    route: Partial<Route<string>> & {
      state?:PartialState<NavigationState>
    };
    carouselList: ICarousel[];
    activeSlide:number;

}

class Home extends Component<Iprops> {

  componentDidMount(){
    // this.loadData(true);
  }

  loadData = (refreshing:boolean, callback?:() => void) => {
    const {dispatch, route} = this.props;
    dispatch({
      type: 'home/fetchCarouselList',
      payload:{
        carouselList: [],
        activeSlide:2,
      },
      callback,
    })
   }


  render() {

    const {carouselList,activeSlide} = this.props;

    return (
      <View>
        <Text> 主页 </Text>
        <Text> dva:{activeSlide} </Text>
        <Button title="点击跳进详情" onPress={this.onclick} />
      </View>
    );
  }

  majox(){
    return Promise.resolve(1);
   }

   *gen(){
    let role = yield 1;
    console.log(role);
    }
  
  onclick = ()=> {

    // const {navigation} = this.props;
    // navigation.navigate("Detail",{});
    // this.loadData(true);
    let g = this.gen();
    g.next();

  }


}

export default connector(Home);

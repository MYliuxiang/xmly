import React, {Component} from 'react';
import {Text, View, Button, Image, SafeAreaView} from 'react-native';
import {RootStackNavigationProp} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {
  NavigationState,
  PartialState,
  RouteProp,
  Route,
  InitialState,
} from '@react-navigation/native';
import {ICarousel, HomeModelState} from '@/models/home';
import {RootState} from '@/models/models';
import Icon from 'react-native-vector-icons/FontAwesome';

import SnapCarousel, {
  Pagination,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import { kScreenW } from '@/untils/LxLayout';

const mapState = ({home}: RootState) => ({
  carouselList: home.carouselList,
  activeSlide: home.activeSlide,
});

const connector = connect(mapState);

type MadelState = ConnectedProps<typeof connector>;

interface Iprops extends MadelState {
  navigation: RootStackNavigationProp;
  route: Partial<Route<string>> & {
    state?: PartialState<NavigationState>;
  };
  carouselList: ICarousel[];
  activeSlide: number;
}

const carouselList = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F776da54278b4e99bf445a566777479a1f215922f29b08-ICwpDd_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625130323&t=1fceffb95ce1e83bc4db2f911d176737',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fdf6b69018db81b027a21d5dbe083085f2a24358c5e5be-HvW7Zn_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625130323&t=85f6e0969bbf16e6cdc6625267d45a24',
];

class Home extends Component<Iprops> {
  carouselRef = React.createRef<SnapCarousel<any>>();
  componentDidMount() {
    // this.loadData(true);
  }

  loadData = (refreshing: boolean, callback?: () => void) => {
    const {dispatch, route} = this.props;
    dispatch({
      type: 'home/fetchCarouselList',
      payload: {
        carouselList: [],
        activeSlide: 2,
      },
      callback,
    });
  };

  render() {
    const {carouselList, activeSlide} = this.props;

    return (

        <View>
        <Text> 主页 </Text>
        <Text> dva:{activeSlide} </Text>
        <Icon.Button name="rocket" backgroundColor="#3b5998">
          Login with Faceboofefwfk
        </Icon.Button>
        <Button title="点击跳进详情" onPress={this.onclick} />

        <SnapCarousel
          ref={this.carouselRef}
          data={[1, 2]}
          renderItem={_item => {
            return (
              <Image
                style={{width: kScreenW - 20, height: 100}}
                source={{
                  uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fdf6b69018db81b027a21d5dbe083085f2a24358c5e5be-HvW7Zn_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625130323&t=85f6e0969bbf16e6cdc6625267d45a24',
                }}></Image>
            );
          }}
          sliderWidth={kScreenW}
          itemWidth={kScreenW - 20}
          hasParallaxImages={true}
          inactiveSlideScale={0.8}
          inactiveSlideOpacity={0.7}
          loop={true}
          loopClonesPerSide={2}
          autoplayDelay={500}
          autoplayInterval={3000}
          removeClippedSubviews={false}></SnapCarousel>
      </View>
    );
  }

  onclick = () => {
    const {navigation} = this.props;
    navigation.navigate('MDetail', {});
    // this.loadData(true);
  };
}

export default connector(Home);

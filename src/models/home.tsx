import axios from 'axios';
import {Effect} from 'dva-core-ts';
import Config from 'react-native-config';
import {Reducer} from 'redux';

const CAROUSEL_URL = Config.API_URL;

export interface ICarousel {
  id: number;
  image: string;
  colors: [string, string];
}



export interface HomeModelState {
  activeSlide: number; // 是否显示播放按钮
  carouselList: ICarousel[];
}

export interface HomeModelType {
  namespace: string;
  state: HomeModelState;
  reducers: {
    add: Reducer<HomeModelState>;
  };
  effects: {
    fetchCarouselList: Effect;
  };
}

const initialState: HomeModelState = {
  carouselList: [{id: 1, image: 'fefef', colors: ['fefef', 'fefef']}],
  activeSlide: 1,
};

const Home: HomeModelType = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(initialState, {payload}) {
      return {
        ...initialState,
        // ...payload,
        activeSlide: initialState.activeSlide + payload.activeSlide ,
      };
    },
  },
  effects: {
    // 获取轮播图数据列表
    *fetchCarouselList({payload}, {call, put}) {

      // let a= 3;
      // const myPro = yield call(axios.get, CAROUSEL_URL);
      // myPro.then(data => {
      //      console.log(data);
      //  }
      // )

      // yield put({
      //   type: 'add',
      //   payload: {
      //     carouselList: data,
      //     activeSlide:2,
      //     error:error,
      //     errcode:errcode,
      //     errmsg:errmsg,
      //   },
      // });
    },
  },
};

export default Home;

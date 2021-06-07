import {DvaLoadingState} from 'dva-loading-ts';
import home from './home';
import Category from './category';
import LoginModel from './login';

const models = [home,Category,LoginModel];

export type RootState = {
  home: typeof home.state;
  category:typeof Category.state;
  login:typeof LoginModel.state;
  loading:DvaLoadingState;
} & {
  [key: string]: typeof home.state;
};

export default models;

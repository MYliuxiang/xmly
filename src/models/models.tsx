import {DvaLoadingState} from 'dva-loading-ts';
import home from './home';
import Category from './category';

const models = [home,Category];

export type RootState = {
  home: typeof home.state;
  category:typeof Category.state;
} & {
  [key: string]: typeof home.state;
};

export default models;

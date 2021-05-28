import {DvaLoadingState} from 'dva-loading-ts'
import home from './home'
 const models = [
    home,
 ]

 export type RootState = {
   home: typeof home.state;
  
 } & {
   [key: string]: typeof home.state;
 };
 


export default models;
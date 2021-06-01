import {create, Model} from 'dva-core-ts';
// @ts-ignore
import createLoading from 'dva-loading';
// @ts-ignore
import immer from 'dva-immer';
import {createLogger} from 'redux-logger';
import {ModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import models from '@/models/models';
import '@/config/http';
import home, { HomeModelType } from '@/models/home';
import Animated from 'react-native-reanimated';
const modelExtend = require('dva-model-extend').default;


//创建实例
const app = create({
  onError: function (e) {
    console.log('e', e);
  },
});

//加载model对象
models.forEach(model => {
  app.model(model);
});
app.use(createLoading());
//启动dva
app.start();

export default app._store;

interface Cached{
  [key:string]:number;
}

const cached:Cached = {
  home:1,
}

function registerModel(model:Model){
  if(!cached[model.namespace]){
    app.model(model);
    cached[model.namespace] = 1;
  }
}

export function createModel(namespace:string){

  const model:HomeModelType = modelExtend( home, {
    namespace,
    state:{
      scrollValue:new Animated.Value(0),
    }
  })

  registerModel(model);
}

import {create} from 'dva-core-ts';
// @ts-ignore
import createLoading from 'dva-loading';
// @ts-ignore
import immer from 'dva-immer';
import {createLogger} from 'redux-logger';
import {ModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import models from '@/models/models';
import '@/config/http';


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

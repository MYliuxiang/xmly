import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import storage, {storageLoad} from '@/config/storage';
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

const REQUEST_URL = '/mock/11/login';

export interface IUser {
  name: string;
  avatar: string;
}

export interface LoginModelState {
  loging: boolean;
  user?: IUser;
}

export interface LoginModelType extends Model {
  namespace: 'login';
  state: LoginModelState;
  reducers: {
    setState: Reducer<LoginModelState>;
  };
  effects: {
    login: Effect;
    logout: Effect;
    loadStorage: Effect;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState: LoginModelState = {
  loging: false,
  user: undefined,
};

const LoginModel: LoginModelType = {
  namespace: 'login',
  state: initialState,
  reducers: {
    setState(state, {payload}) {
      const newState = {
        ...state,
        ...payload,
      };
      return newState;
    },
  },
  effects: {
    *loadStorage({payload, callback}, {call, put}) {
      const user = yield call(storageLoad, {key: 'user'});
      yield put({
        type: 'setState',
        payload: {
          loging: true,
          user: user,
        },
      });
    },

    *login({payload, callback}, {call, put}) {
      const {data} = yield call(axios.post, REQUEST_URL);
      yield put({
        type: 'setState',
        payload: {
          loging: true,
          user: data,
        },
      });
      storage.save({
        key: 'user',
        data: data,
      });
      if (callback) {
        callback();
      }
    },
    *logout(_, {put}) {
      yield put({
        type: 'setState',
        payload: {
          loging: false,
          user: null,
        },
      });
      storage.save({
        key: 'user', // 注意:请不要在key中使用_下划线符号!
        data: null,
      });
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'loadStorage',
      });
    },
  },
};

export default LoginModel;

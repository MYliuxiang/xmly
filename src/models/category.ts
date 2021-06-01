import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import storage, {storageLoad} from '@/config/storage';
import {RootState} from './models';

const defaultCategoryList: ICategory[] = [
  {
    id: '2',
    name: '小说',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '3',
    name: '直播',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '4',
    name: '广播',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '5',
    name: '儿童',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '6',
    name: '精品',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '7',
    name: '畅销书',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '8',
    name: '头条',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '9',
    name: '武汉',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '10',
    name: '70年',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '11',
    name: '开学季',
    type: 'recommend',
    checked: false,
    typeName: '推荐',
  },
  {
    id: '12',
    name: '历史',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '13',
    name: '历史',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '14',
    name: '商业财经',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '15',
    name: '育儿百科',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '16',
    name: '人文',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '17',
    name: '英语',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '18',
    name: '个人成长',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '19',
    name: 'IT科技',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '20',
    name: '国学书院',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '21',
    name: '小语种',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '22',
    name: '名校公开课',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '23',
    name: '好书精讲',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '24',
    name: '少儿英语',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '25',
    name: '学科教育',
    type: 'knowledge',
    checked: false,
    typeName: '知识',
  },
  {
    id: '26',
    name: '音乐',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '27',
    name: '相声',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '28',
    name: '段子',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '29',
    name: '情感生活',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '30',
    name: '广播剧',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '31',
    name: '娱乐',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '32',
    name: '影视',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '33',
    name: '二次元',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '34',
    name: '广播剧',
    type: 'entertainment',
    checked: false,
    typeName: '娱乐',
  },
  {
    id: '35',
    name: '旅游',
    type: 'life',
    checked: false,
    typeName: '生活',
  },
  {
    id: '36',
    name: '健康养生',
    type: 'life',
    checked: false,
    typeName: '生活',
  },
  {
    id: '37',
    name: '时尚生活',
    type: 'life',
    checked: false,
    typeName: '生活',
  },
  {
    id: '38',
    name: '戏曲',
    type: 'life',
    checked: false,
    typeName: '生活',
  },
  {
    id: '39',
    name: '时尚生活',
    type: 'life',
    checked: false,
    typeName: '生活',
  },
];

export interface ICategory {
  id: string;
  name: string;
  type: string;
  checked: boolean;
  typeName: string;
  disabled?: boolean;
}

export interface CategoryModelState {
  isEdit: boolean;
  categoryList: ICategory[];
  myCategoryList: ICategory[];
}

export interface CategoryModelType extends Model {
  namespace: 'category';
  state: CategoryModelState;
  effects: {
    toggle: Effect;
    loadDataForStore: Effect;
    fetchData: Effect;
  };
  reducers: {
    setState: Reducer<CategoryModelState>;
    addSort: Reducer<CategoryModelState>;
    deleteSort: Reducer<CategoryModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState: CategoryModelState = {
  isEdit: false,
  categoryList: defaultCategoryList,
  myCategoryList: [
    {
      id: 'home',
      name: '推荐',
      type: 'default',
      disabled: true,
      checked: true,
      typeName: '我的分类',
    },
    {
      id: 'vip',
      name: 'Vip',
      type: 'default',
      typeName: '我的分类',
      disabled: true,
      checked: true,
    },
  ],
};

const Category: CategoryModelType = {
  namespace: 'category',
  state: initialState,
  effects: {
    *toggle(_, {put, select}) {
      const category: CategoryModelState = yield select(
        (state: RootState) => state.category,
      );
      yield put({
        type: 'setState',
        payload: {
          isEdit: !category.isEdit,
        },
      });
      if (category.isEdit) {
        storage.save({
          key: 'categoryList',
          data: category.categoryList,
        });
        storage.save({
          key: 'myCategoryList',
          data: category.myCategoryList,
        });
      }
    },
    *loadDataForStore(dispatch, {call, put}) {

      const categoryList: ICategory[] = yield call(storageLoad, {
        key: 'categoryList',
      });
      const myCategoryList: ICategory[] = yield call(storageLoad, {
        key: 'myCategoryList',
      });
      yield put({
        type: 'setState',
        payload: {
          categoryList,
          myCategoryList,
          isEdit: false,
        },
      });
    },
    *fetchData(_, {call, put}) {
      const categoryList: ICategory[] = yield call(storageLoad, {
        key: 'categoryList',
      });
      const myCategoryList: ICategory[] = yield call(storageLoad, {
        key: 'myCategoryList',
      });
      yield put({
        type: 'setState',
        payload: {
          categoryList,
          myCategoryList,
          isEdit: false,
        },
      });
    },
  },
  reducers: {
    setState: (state = initialState, {payload}) => {
      return {
        ...state,
        ...payload,
      };
    },
    addSort: (state = initialState, {payload}) => {
      return {...state, myCategoryList: state.myCategoryList.concat([payload])};
    },
    deleteSort: (state = initialState, {payload}) => {
      return {
        ...state,
        myCategoryList: state.myCategoryList.filter(
          item => item.id !== payload.id,
        ),
      };
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({type: 'loadDataForStore'});
    },
  },
};

export default Category;

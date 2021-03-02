import { Reducer, Effect } from 'umi';

export interface TodoItemType {
  id: number;
  name: string;
}

export interface StateType {
  products: TodoItemType[];
}

export interface TodoListModelType {
  namespace: string;
  state: StateType;
  effects: {
  };
  reducers: {
    delete: Reducer<StateType>;
  };
}

const model: TodoListModelType = {
  namespace: 'TodoList',
  state: {
    products: [
      {
        id: 1,
        name: "antd"
      },
      {
        id: 2,
        name: "umi"
      }
    ]
  },
  effects: {

  },
  reducers: {
    delete(state, { payload }) {
      return {
        ...state,
        products: state!.products.filter(item => item.id !== payload)
      }
    }
  }
}

export default model
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

export default function (state=[], action){//注意这里 state 是一个 todos 的数组
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          text: action.text,
          id: action.id,
          completed: action.completed
        },
        ...state
      ];
      break;
    }
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id){
          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        }
        else {
          return todoItem;
        }
      })
    }
    case REMOVE_TODO: {
      state.filter((todoItem) => {//删除某个数组的一项，返回一个新的数组
        return action.id !== todoItem.id
      })
    }
    default:
      return state;
  }
}
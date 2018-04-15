import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';
const counterValues = {
  'First': 1,
  'Second': 2,
  'Third': 3
};

const CounterStore = Object.assign({},EventEmitter.prototype, {
  getCounterValues: function () {
    return counterValues;
  },
  emitChange: function (){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (cb){
    this.on(CHANGE_EVENT,cb);
  },
  removeChangeListener: function (cb){
    this.removeListener(CHANGE_EVENT,function (cb){

    });
  }
});

CounterStore.dispatchToken = AppDispatcher.register((action)=>{
  if (action.type === ActionTypes.INCREMENT){
    counterValues[action.counterCaption]++;
    CounterStore.emitChange();
  }else if (action.type === ActionTypes.DECREMENT){
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();
  }
})



export default  CounterStore;
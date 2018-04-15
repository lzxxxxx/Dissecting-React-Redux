import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';
import CounterStore from './CounterStore';

const CHANGE_EVENT = 'changed';
const computeSummary = function (counterValues){
  let sum = 0;
  for (let key in counterValues){
    if (counterValues.hasOwnProperty(key)) {
      sum += counterValues[key];
    }
  }
  return sum;
}

const SummaryStore = Object.assign({},EventEmitter.prototype, {
  getSummary: function (){
    return computeSummary(CounterStore.getCounterValues());
  },
  emitChange: function (){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (cb){
    this.on(CHANGE_EVENT,cb);
  },
  removeChangeListener: function (cb){
    this.removeListener(CHANGE_EVENT,cb);
  }
});

SummaryStore.dispatchToken = AppDispatcher.register((action)=>{
  if (action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT){
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChange();
  }
})


export default SummaryStore;
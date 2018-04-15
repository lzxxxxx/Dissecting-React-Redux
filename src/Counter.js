import React, {Component} from 'react';
import CounterStore from './Stores/CounterStore';
import * as Actions from './Actions';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      count: CounterStore.getCounterValues()[this.props.caption],
    }
  }
  shouldComponentUpdate (nxtprops,nxtState){
    return (nxtprops.caption!==this.props.caption || nxtState.count!==this.state.count);
  }
  componentDidMount(){
    CounterStore.addChangeListener(this.onChange);
  }
  componentWillUnmount (){
    CounterStore.removeChangeListener(this.onChange);
  }
  updateCount (isIncrement){
    let caption = this.props.caption;
    isIncrement ? Actions.increment(caption) : Actions.decrement(caption);
  }
  onChange (){
    this.setState({
      count: CounterStore.getCounterValues()[this.props.caption]
    });
  }
  onClickIncrementButton (){//增加
    this.updateCount(true)
  }
  onClickDecrementButton (){//减小
    this.updateCount(false)
  }
  render (){
    return (
      <div>
        <button onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickDecrementButton}>-</button>
        <span>{this.props.caption} count: {this.state.count}</span>
      </div>
    )
  }
}

export default Counter;

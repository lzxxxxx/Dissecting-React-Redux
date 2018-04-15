import React, {Component} from 'react';

class Counter extends Component {
  constructor (props){
    super(props);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {
      count: this.props.initValue
    }
  }
  updateCount (isIncrement){
    var preValue = this.state.count;
    var newValue = isIncrement ? this.state.count+1: this.state.count-1;
    this.setState({
      count: newValue
    });
    this.props.onUpdate(newValue,preValue);
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

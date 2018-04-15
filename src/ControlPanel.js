import React, {Component} from 'react';
import Counter from './Counter';

class ControlPanel extends Component {
  constructor (props){
    super(props);
    this.initValues = [1,2,3];
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.state = {
      sum: this.initValues.reduce((sum,num)=>{return sum+num;}, 0)
    }
  }
  onCounterUpdate (newval,preval){
    const valchange = newval - preval;
    this.setState({
      sum: this.state.sum + valchange
    });
  }
  render (){
    return (
      <div>
        <Counter initValue={this.initValues[0]} caption="First" onUpdate={this.onCounterUpdate}/>
        <Counter initValue={this.initValues[1]} caption="Second" onUpdate={this.onCounterUpdate}/>
        <Counter initValue={this.initValues[2]} caption="Third" onUpdate={this.onCounterUpdate}/>
        <hr/>
        <span>Total count: {this.state.sum}</span>
      </div>
    )
  }
}

export default ControlPanel;

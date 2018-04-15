import React, {Component} from 'react';
import SummaryStore from './Stores/SummaryStore';

class Summary extends Component {
  constructor (props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      sum: SummaryStore.getSummary()
    }
  }
  componentDidMount (){
    SummaryStore.addChangeListener(this.onChange)
  }
  componentWillUnmount (){
    SummaryStore.removeChangeListener(this.onChange)
  }
  onChange (){
    this.setState({
      sum: SummaryStore.getSummary()
    });
  }

  render (){
    return (
      <span>total count: {this.state.sum}</span>
    )
  }
}

export default Summary;
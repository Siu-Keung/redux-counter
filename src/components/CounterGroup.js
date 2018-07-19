import React, {Component} from 'react'
import CounterContainer from '../containers/CounterContainer'

class CounterGroup extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let counterArray = [];
        for(let index = 0; index < 2; index++){
            counterArray.push(<CounterContainer index={index}/>)
        }
        return (
          <div>
              {counterArray}
          </div>
        );
    }
}

export default CounterGroup;
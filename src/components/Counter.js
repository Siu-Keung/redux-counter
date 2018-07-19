import React, {Component} from 'react'

class Counter extends Component{
    constructor(props) {
        super(props);
    }



    render(){
        const {onAddButtonClicked} = this.props;
        return (
            <p>
                <span>点击了：{this.props.count}次</span>
                <button onClick={onAddButtonClicked.bind(this, this.props.index)}>+</button>
                <button>-</button>
                <input type='text' />
                <button>X</button>
                <button>延迟+</button>
            </p>
        );
    }
}

export default Counter;
import React, {Component} from 'react'

class Counter extends Component{
    constructor(props) {
        super(props);
        this.timesInput = React.createRef();
    }


    handleSubButtonClicked = () => {
        this.props.onMultiButtonClicked(this.props.index, this.timesInput.current.value);
    }

    render(){
        const {onAddButtonClicked, onSubButtonClicked} = this.props;
        return (
            <p>
                <span>点击了：{this.props.count}次</span>
                <button onClick={onAddButtonClicked.bind(this, this.props.index)}>+</button>
                <button onClick={onSubButtonClicked.bind(this, this.props.index)}>-</button>
                <input type='text' defaultValue={1} ref={this.timesInput} />
                <button onClick={this.handleSubButtonClicked}>*</button>
                <button>延迟+</button>
            </p>
        );
    }
}

export default Counter;
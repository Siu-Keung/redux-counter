import {connect} from 'react-redux'
import Counter from "../components/Counter";


const mapStateToProps = (state, ownProps) =>{
    return {
        count: state[ownProps.index],
        index: ownProps.index
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onAddButtonClicked: (index) => dispatch({type: 'ADD', index: index}),
        onSubButtonClicked: (index) => dispatch({type: 'SUB', index: index}),
        onMultiButtonClicked: (index, times) => dispatch({type: 'MUL', index: index, times: times}),
        onDelayButtonClicked: (index) => setTimeout(() => {
            dispatch({type: 'DELAY_ADD', index: index})
        }, 1000)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
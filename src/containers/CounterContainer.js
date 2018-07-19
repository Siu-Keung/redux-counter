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
        onAddButtonClicked: (index) => dispatch({type: 'ADD', index: index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
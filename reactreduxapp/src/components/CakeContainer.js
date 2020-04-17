import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cake -- {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//below function is used to map the redux state to prop that can be used in react component
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//below function is used to dispatch the action from react componen to reducer and finally to store of redux.
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCake()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

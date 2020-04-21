import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/index'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of IceCream -- {props.numOfIceCream}</h1>
            <button onClick={props.buyCake}>Buy IceCrean</button>
        </div>
    )
}

//below function is used to map the redux state to prop that can be used in react component
const mapStateToProps = state => {
    return {
        numOfIceCream: state.icecream.numOfIceCream
    }
}

//below function is used to dispatch the action from react componen to reducer and finally to store of redux.
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyIceCream()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function NewCakeContainerUseStagePayload(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of Cake -- {props.numOfCakes}</h1>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            {/* <button onClick={props.buyCake}>Buy Cake</button> */}
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div >
    )
}

//below function is used to map the redux state to prop that can be used in react component
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

//below function is used to dispatch the action from react componen to reducer and finally to store of redux.
const mapDispatchToProps = dispatch => {
    return {
        /* buyCake: () => { dispatch(buyCake()) } */
        buyCake: (number) => { dispatch(buyCake(number)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainerUseStagePayload)

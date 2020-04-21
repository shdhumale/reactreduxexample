import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/index'

function HookCakeContainer() {
    const numOfCakes = useSelector((state) => { return state.cake.numOfCakes })
    const dispatch = useDispatch()
    return (
        <div>
            <h1>The number of cake is ... {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

/* const callReduxFunction = (dispatch) => {
    return dispatch(buyCake())
}
 */
export default HookCakeContainer

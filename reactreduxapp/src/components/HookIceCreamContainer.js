import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/index'

function HookIceCreamContainer() {
    const numOfIceCream = useSelector((state) => { return state.icecream.numOfIceCream })
    const dispatch = useDispatch()
    return (
        <div>
            <h1>The number of Iceream is ... {numOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

/* const callReduxFunction = (dispatch) => {
    return dispatch(buyCake())
}
 */
export default HookIceCreamContainer

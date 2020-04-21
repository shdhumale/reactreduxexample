import { BUY_ICECREAM } from './icecreamType'


const initialState = {
    numOfIceCream: 25
}

const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {

        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }

}

export default icecreamReducer

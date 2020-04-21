import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream, buyCake } from '../redux/index'

function ItemContainer(props) {
    return (
        <div>
            <h1>Number of item using Prop in mapStateToProps - {props.items}</h1>
            <button onClick={props.buyItem}>Buy Items 123</button>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {

    const numberItem = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCream

    return {
        items: numberItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchItem = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchItem
    }

}

//export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
export default connect(null, mapDispatchToProps)(ItemContainer)

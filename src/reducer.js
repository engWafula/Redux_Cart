import { INCREASE,DECREASE,CLEAR_CART,REMOVE} from "./actions";



const reducer=(state,action)=>{


    switch(action.type){
        case CLEAR_CART:
            return {...state,cart:[]}
        case DECREASE:
            console.log('DECREASED')
        case INCREASE:
            console.log('Incresed')  
        case  REMOVE:
            return {...state,cart:state.cart.filter((cartItem)=>cartItem.id!==action.payload.id)}       
        default:
            return state    
    }
  }

  export default reducer
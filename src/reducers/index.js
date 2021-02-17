import {ADD_CART,DELETE_DISH,INCREMENT,DECREMENT,TOGGLE_OPEN,TOGGLE_CLOSE} from '../constants/action-types';



const initialState = {
    carts: [],
    isOpen: false,
  };
function checkIfContained(arr, str){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === str){
            return true;
        }
    }
    return false;
}
function checkIndexByName(array, attr, value) {
    for(let i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

function rootReducer(state = initialState, action) {
    //  if(action.type === ADD_CART){
    //     return Object.assign({}, state, {
    //         carts: state.carts.concat(action.payload)
    //       });
    //  }
    //  return state;
  
    switch(action.type){
        case ADD_CART:
            console.log(checkIfContained(state.carts, action.payload.name))
            console.log(checkIndexByName(state.carts, 'name', action.payload.name))
            if(checkIfContained(state.carts, action.payload.name)){
                let index = checkIndexByName(state.carts, 'name', action.payload.name);
                let cnt = action.payload.cnt + 1;
                action.payload.cnt = cnt;
                console.log(index, cnt, action.payload);
                return Object.assign({}, state, {
                    carts: [...state.carts.slice(0,index), action.payload, ...state.carts.slice(index + 1)]
                    });
            }else{
                let cnt = action.payload.cnt + 1;
                action.payload.cnt = cnt;
                console.log( cnt, action.payload);
                return Object.assign({}, state, {
                    carts: state.carts.concat(action.payload)
                    });
                    
            }
        
        case DELETE_DISH:
            
            let index = checkIndexByName(state.carts, 'name', action.payload.name);
            return Object.assign({},state,{
                carts: [...state.carts.slice(0, index), ...state.carts.slice(index+1, state.carts.length)]
            })
        
        case INCREMENT:
            
            let i = checkIndexByName(state.carts, 'name', action.payload.name);
            let cnt = state.carts[i].cnt + 1;
            action.payload.cnt = cnt;
            return Object.assign({},state,{
                carts: [...state.carts.slice(0, i), action.payload, ...state.carts.slice(i+1, state.carts.length)]
            })

        case DECREMENT:
          
            let a = checkIndexByName(state.carts, 'name', action.payload.name);
            let count = state.carts[a].cnt - 1;
            console.log('im inside decrement', count);
            action.payload.cnt = count;
            if(action.payload.cnt > 0){
                return Object.assign({},state,{
                    carts: [...state.carts.slice(0, a), action.payload, ...state.carts.slice(a+1, state.carts.length)]
                })
            }else{
                return Object.assign({},state,{
                    carts: [...state.carts.slice(0, a), ...state.carts.slice(a+1, state.carts.length)]
                })
            }
         
        case TOGGLE_OPEN:
            console.log('im inside toggle open!');
            return {
                ...state,
                isOpen: true
            }
        
        case TOGGLE_CLOSE:
            console.log('im inside toggle close!');
            return {
                ...state,
                isOpen: false
            }
            
            

        default:
            return state
    }
  };
  
  export default rootReducer;
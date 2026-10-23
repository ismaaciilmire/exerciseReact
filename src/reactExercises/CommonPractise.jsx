import {useState,useReducer} from 'react'

const CommonPractise = () => {
  const initialState={count:0}

  const reducer=(state,action)=>{
    switch(action.type){
      case 'increment':
        return{count: state.count +1}

        case 'Decrement':
          return{count: state.count - 1}
          default:
            return state;

    }
  }


  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type: 'increment'})}>increment</button>
      <button onClick={()=>dispatch({type: 'Decrement'})}>Decrement</button>

    </div>
  )
 
}

export default CommonPractise

import { useState, useReducer } from 'react'


const Exercise13 = () => {
   const inialState = { counterA: 0, counterB: 0 }

    const reducer =(state, action)=> {
        switch (action.type) {
            case 'increment_A':
                return {...state, counterA: state.counterA + 1 }
            case 'decrement_A':
                return {...state, counterA: state.counterA >0  ? state.counterA -1 : 0 }

            case 'increment_B':
                return {...state, counterB: state.counterB + 1 }
            case 'decrement_B':
                return {...state, counterB: state.counterB >0 ? state.counterB - 1 : 0 }

                case 'reset-all':
                    return inialState;
                default:
                    return state;

        }

    }

    const [state,dispatch] = useReducer(reducer,inialState)

    return (
        <div>
            <h2>double counter</h2>
            <h3> counterA:{state.counterA}</h3>
            <button onClick={()=>dispatch({type:'increment_A'})}>+A</button>
            <button onClick={()=>dispatch({type:'decrement_A' })} disabled={state.counterA===0}>-A</button>
            <h2>counterB: {state.counterB}</h2>
            <button onClick={()=>dispatch({type:'increment_B'})}>+B</button>
            <button onClick={()=>dispatch({type:'decrement_B'})} disabled={state.counterB ===0}>-B</button>

            <button onClick={()=>dispatch({type:'reset-all'})}>reset both</button>
        

        </div>
    )
}

export default Exercise13

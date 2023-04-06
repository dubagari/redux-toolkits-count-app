
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD, ADD_NUMBER, RESET, SUBTRACT } from '../../store/counterSlice'
import { TOOGLE_AUTH } from '../../store/authSlice'



const Counter = () => {

  const count = useSelector(state=> state.counter.count)
  const isLogIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLogIn);

  const dispatch = useDispatch()
    
  return (
    <>
      <div className="counter">
            <div className="counter-body">
                        
          <button className="btn home" onClick={() => dispatch(TOOGLE_AUTH())}>{isLogIn ? 'login' : 'logout' }</button>
                  
          {isLogIn ? <h3 className='head'>please login</h3> :
            (
                      <>
                      
                    <h3 className='head'>react counter app</h3>
                <h1 className='count'>{count}</h1>
                    <div className="home-btn">
                        <button className='btn add' onClick={() => dispatch(ADD())}>add</button>
                        <button className='btn reset' onClick={() => dispatch(RESET())}>reset</button>
                        <button className='btn subtract' onClick={() => dispatch(SUBTRACT())}>subtract</button>
                        <button className='btn addNumber' onClick={() => dispatch(ADD_NUMBER(4))} >add number 3</button>
                    </div>
                      </>
                  )}
            </div>
      </div>
    </>
  )
}

export default Counter

import React from 'react'
import '../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import {changeColor,changeStyle } from '../actions/index.js';

const App = () => {
const colorState = useSelector(state =>  state.colorReducer)  
const styleState = useSelector(state => state.styleReducer)  

const dispatch =useDispatch();
//code here 

  return (
    <div id="main">
      <h1 id='text' style={{color: colorState, fontFamily: styleState}}>Newton School</h1>
      <button id='colorBtn' onClick={()=>dispatch(changeColor(colorState))}>Change Color</button>
      <button id='styleBtn' onClick={()=>dispatch(changeStyle(styleState))}>Change Style</button>

    </div>
  )
}


export default App;

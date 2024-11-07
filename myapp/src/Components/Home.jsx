import React,{useState,useEffect} from 'react'

const Home = () => {
    const [inputValue,setInputValue]=useState(0);
    const Increment=()=>{
        setInputValue(inputValue+1)
    } 
    const Decrement=()=>{
        setInputValue(inputValue-1)
    } 
     const btnStyle={
        padding:20,
        border:"1px solid red",
        backgroundColor:"#f1f1f1",
        margin : 10
     }
     useEffect(() => {
       console.log("Run")
     }, [])
     

  return (
    <div>
        <input style={{padding:10,border:"2px solid rgba(0,0,0,0.4)"}} type="number" placeholder='enter here' 
        value={inputValue}
        readOnly
        />
        <button style={btnStyle} onClick={Increment}>+</button>
        <button style={btnStyle} onClick={Decrement}>-</button>
    </div>
  )
}

export default Home
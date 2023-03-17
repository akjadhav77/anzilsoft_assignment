import React, { useState } from 'react'
import './Assignment1.css'

const Assignment1 = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [num3, setNum3] = useState('')

    const handleAdd = ()=> {
        setNum3(parseInt(num1) + parseInt(num2))
    }

    const handleSub = ()=> {
        setNum3(parseInt(num1) - parseInt(num2))
    }

    const handleMultiply = ()=> {
        setNum3(parseInt(num1) * parseInt(num2))
    }

    const handleDiv = ()=> {
        setNum3(parseInt(num1) / parseInt(num2))
    }

  return (
    <div className='container'>
        <h3>Number Operations:</h3>
        <p> <b> Enter Number 1: </b> </p> <input type="number" placeholder='Enter a Number...' onChange={(e)=> setNum1(e.target.value)} />
        <p> <b> Enter Number 2: </b> </p> <input type="number" placeholder='Enter a Number...' onChange={(e)=> setNum2(e.target.value)} /><br />
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Substract</button>
            <button onClick={handleMultiply}>Multiply</button>
            <button onClick={handleDiv}>Divide</button>
        </div>
        <h4>Result: {num3}</h4>
    </div>
  )
}

export default Assignment1
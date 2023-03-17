import React, { useState } from 'react'
import './Assignment2.css'

const Assignment2 = () => {

    const [inputData, setInputData] = useState({
        firstName: '',
        lastName: ''
    });

    const [inputArr, setInputArr] = useState([]);

    function handleChange(e) {

        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
    let { firstName, lastName } = inputData;
    function handleBtnChange() {
        setInputArr([...inputArr, { firstName, lastName }]);
        console.log(inputArr);
        console.log(inputData);
        setInputData({ firstName: '', lastName: '' })
    }
    // console.log(inputData);


  return (
    <div className='mycontainer'>
        <input type="text" name='firstName' placeholder='Enter First Name' value={inputData.firstName} onChange={handleChange} /><br />
        <input type="text" name='lastName' placeholder='Enter Last Name' value={inputData.lastName} onChange={handleChange} /><br />

        <button onClick={handleBtnChange}>Add</button> 

        <table border={1} width='45%' cellPadding={10}>
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                </tr>
                {
                    inputArr.map(
                        (info,ind)=> {
                            return(
                            <tr key={ind}>
                                <td>{info.firstName}</td>
                                <td>{info.lastName}</td>
                            </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Assignment2
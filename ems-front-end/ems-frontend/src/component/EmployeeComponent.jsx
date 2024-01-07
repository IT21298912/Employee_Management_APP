import React from 'react'
import { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName,setFirstName] = useState('') //initial value empty
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')




    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName,lastName,email}
        console.log(employee);
    }


  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h1 className='text-center'>Add Employee</h1>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-lable'>First Name</label>
                            <input
                                type='text'
                                placeholder='Employee First Name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={(e)=> setFirstName(e.target.value)}>
                            </input>
                            </div>
                            <div className='form-group mb-2'>
                            <label className='form-lable'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={(e)=> setLastName(e.target.value)}>
                            </input>
                            </div>
                            <div className='form-group mb-2'>
                            <label className='form-lable'>Email</label>
                            <input
                                type='text'
                                placeholder='Employee Email'
                                name='Email'
                                value={email}
                                className='form-control'
                                onChange={(e)=> setEmail(e.target.value)}>
                            </input>
                            
                            </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>

            </div>

        </div>

    </div>
  )
}

export default EmployeeComponent
import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName,setFirstName] = useState('') //initial value empty
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [errors,setErrors] = useState({
                                firstName:'',
                                lastName:'',
                                email:''
                            })
    
    const {id} = useParams();   //catch the id from url

    useEffect(()=>{

        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error=>{
                console.error(error);
            })
        }

    },[id])


 

    const navigator = useNavigate();




    function saveOrUpdateEmployee(e){
        e.preventDefault();


        if(validateForm()){

            const employee = {firstName,lastName,email}
            console.log(employee);

            if(id){ //if only id in the url
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employee')
                }).catch(error=>{
                    console.error(error);
                })

            }else{
                createEmployee(employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employee')
                }).catch(error=>{
                    console.error(error);
                })

            }




        }


    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors}

        if(firstName.trim()){
            errorsCopy.firstName='';
        }else{
            errorsCopy.firstName='First Name is Required!.';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else{
            errorsCopy.lastName = 'Last Name is Required!.';
            valid = false ;
        }

        if(email.trim()){
            errorsCopy.email = '';

        }else{
            errorsCopy.email = 'Email is Required!.';
            valid = false;
        
        }

        setErrors(errorsCopy);
        return valid;

    }

    function pageTitle(){
        if(id){
            return <h1 className='text-center'>Update Employee</h1>
        }else{
            return <h1 className='text-center'>Add Employee</h1>
        }
    }


  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-lable'>First Name</label>
                            <input
                                type='text'
                                placeholder='Employee First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${errors.firstName? 'is-invalid':''}`}
                                onChange={(e)=> setFirstName(e.target.value)}>
                            </input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                            <label className='form-lable'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName? 'is-invalid':''}`}
                                onChange={(e)=> setLastName(e.target.value)}>
                            </input>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                            <label className='form-lable'>Email</label>
                            <input
                                type='text'
                                placeholder='Employee Email'
                                name='Email'
                                value={email}
                                className={`form-control ${errors.email? 'is-invalid':''}`}
                                onChange={(e)=> setEmail(e.target.value)}>
                            </input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            
                            </div>

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>

            </div>

        </div>

    </div>
  )
}

export default EmployeeComponent
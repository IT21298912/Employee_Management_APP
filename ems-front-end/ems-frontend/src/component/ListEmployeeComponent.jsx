import React ,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const Navigator = useNavigate();

    useEffect(()=>{
        getAllEmployees();

    },[])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    function addNewEmployee(){
        Navigator('/add-employee');

    }
    function updateEmployee(id){
        Navigator(`/edit-employee/${id}`);
    }
    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response)=>{
            getAllEmployees();

        }).catch(error=>{
            console.error(error);
        })
    }
   

  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>
        <button className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-boardered table-striped'>
            <thead>
            <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Action</th>

            </tr>
            </thead>
            <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                                </td>

                            </tr>
                            )
                    }
                    
            </tbody>
            
        </table>



    </div>
  )
}

export default ListEmployeeComponent
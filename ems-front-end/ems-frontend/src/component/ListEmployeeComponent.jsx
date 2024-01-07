import React ,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    },[])
   

  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>
        <table className='table table-boardered table-striped'>
            <thead>
            <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>

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

                            </tr>
                            )
                    }
                    
            </tbody>
            
        </table>



    </div>
  )
}

export default ListEmployeeComponent
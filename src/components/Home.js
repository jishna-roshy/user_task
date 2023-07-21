import React from 'react'
import Employee from './Empolyee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { FaUserEdit,FaUserTimes,FaUserPlus } from "react-icons/fa";

function Home() {
  const history=useNavigate()
  const handleDelete=(id) => {
   var index=Employee.map(item=>item.id).indexOf(id); //index
   Employee.splice(index,1) //item remove
   console.log(Employee); //array position with remaining items
   history('/home')//refresh
  }
  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",salary);

  }
  return (
    <> 
<h1 className='text-primary text-center m-4'>User Detailes</h1>
    
    <Link to={'/add'}>
    <Button variant='success'>Add  <FaUserPlus/></Button>
    </Link>
   

    <h3 className='my-5'>List of users</h3>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Empolyee Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        Employee && Employee.length>0?
        Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={'/edit'}> <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)} variant="primary"><FaUserEdit/></Button></Link>
                  
                  <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaUserTimes/></Button>
                  </td>
            </tr>
        )):'No data available'
     }
      
    </tbody>
  </Table>
  </>
  )
}

export default Home
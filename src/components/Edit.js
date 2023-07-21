import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Empolyee';

function Edit() {

      const [id,setId]=useState('');
      const [empname,setEmpname]=useState('');
      const [age,setAge]=useState('');
      const [designation,setDesignation]=useState('');
      const [salary,setSalary]=useState(0);

      useEffect(()=>{
       setId(localStorage.getItem('ID'))
       setEmpname(localStorage.getItem('NAME'))
       setAge(localStorage.getItem('AGE'))
       setDesignation(localStorage.getItem('DESIGNATION'))
       setSalary(localStorage.getItem('SALARY'))
       
      },[])
      console.log(id);
      console.log(empname);


      var index = Employee.map(item=>item.id).indexOf(id);
      console.log(index);//0


      let history=useNavigate()
       const handleUpdate=(e)=>{
        e.preventDefault();//avoid refreshing
        console.log(e)//event 
        let emp=Employee[index]
        console.log(emp);//full details of employee
        emp.id=id;
        emp.empname=empname;
        emp.age=age;
        emp.designation=designation;
        emp.salary=salary;
        console.log(emp);//updated details of employee

        history('/home')

      }


  return (
    <>
       <h1 className='text-primary text-center m-4'>Update Employee Management System</h1>
    <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.</p>
     
     <Row>
        <Col md={4}>
        <img src='https://th.bing.com/th/id/R.2ebd62f3f6a21c1325b9c366d17996d7?rik=DqGO3RXyKPN8Qw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fstaff-icon-png-65.png&ehk=r85d%2bcjtS%2bKr2%2fASH21wvf%2fMgg3ZiB9FI%2b7W3gvxr48%3d&risl=&pid=ImgRaw&r=0'/>
        </Col>
        <Col md={7}>
        <Form className='border border-3 p-5'>

      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Id"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
        value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age"
        value={age} 
        onChange={(e)=>setAge(e.target.value)}
        required

        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" 
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" 
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required
        />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
        </Col>
     </Row>
    </>
  )
}

export default Edit
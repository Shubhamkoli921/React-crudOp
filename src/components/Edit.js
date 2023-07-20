import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import array from "./array";
import '../css/create.css';

function Edit(){

    const [name,setname] =useState('');
    const [age,setage]=useState('');
    const [id,setID]=useState('');

    let history = useNavigate();
    var index= array.map(function (e){
        return e.id;
    }).indexOf(id);

    const handleSubmitButton = (e)=>{
        e.preventDefault();
        let a=array[index]
        a.Name=name
        a.age=age

        history('/')
    }

    useEffect(()=>{
        setname(localStorage.getItem('Name'))
        setage(localStorage.getItem('age'))
        setID(localStorage.getItem('id'))
    },[])
    
    return (
        <>
        <div>hello this Edit page</div>
        <div>
                <Form className="Main-form" style={{ margin: '15rem' }}>
                    Enter Your Details To Update!
                    <Form.Group className="Inner-form"
                        controlId="formBasicName">
                        <Form.Control onChange=
                            {e => setname(e.target.value)}
                            type="text"
                            placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="Inner-form"
                        controlId="formBasicAge">
                        <Form.Control onChange=
                            {e => setage(e.target.value)}
                            type="text"
                            placeholder="Enter Age" required />
                    </Form.Group>
                    <div className="Form-Button">
                        <Button className="" onClick={e => handleSubmitButton(e)} variant="primary" type="submit">Update</Button>
                        <Link className="d-grid gaap-2" to="/">
                            <Button className="Home-Button" variant="info">Home</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Edit;
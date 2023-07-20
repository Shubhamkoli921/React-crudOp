import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import array from "./array";
import '../css/create.css';

function Create() {

    const [name, setname] = useState('');
    const [age, setage] = useState('');

    let history = useNavigate();

    const handleSubmitButton = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0, 8);

        let a = name, b = age
        array.push({ id: uni, Name: a, age: b })

        history('/');
    }


    return (
        <>
            <div>hello this create page</div>
            <div>
                <Form className="Main-form" style={{ margin: '15rem' }}>
                    Enter Your Details Correctly!
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
                        <Button className="" onClick={e => handleSubmitButton(e)} variant="primary" type="submit">Submit</Button>
                        <Link className="d-grid gaap-2" to="/">
                            <Button className="Home-Button" variant="info">Home</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </>

    );
}

export default Create;
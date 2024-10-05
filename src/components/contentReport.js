import React, { useState } from "react";

import { Card, Form, Button } from "react-bootstrap";

export default function WeeloReport() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <div className="b-tenant-report d-md-flex align-items-center justify-content-center d-xl-block my-5">
            <h2 className="col- col-md-6 col-xl-12">
                <small>The most extensive tenant report</small>
                <span>For just<br />$9.99 </span>
                <strike>$30.00</strike>
            </h2>
            <Card className="col-12 col-md-6 col-xl-12">
                <Card.Body>
                    <Card.Title>Screen your tenant</Card.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tenant name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Jhon Doe"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please type a name.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Tenant mobile</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="+1 12345678"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please type a phone number.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                required
                                type="checkbox"
                                label="Allow data use"
                                feedback="You must allow data usage."
                            />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-end">
                            <Button type="submit">Screen tenant</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
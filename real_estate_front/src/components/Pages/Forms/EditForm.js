import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'




class EditForm extends React.Component {



  render() {
    return (
      <Form>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="password" placeholder="FirstName" />
          </Form.Group>
        <Form.Group controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last Name" />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Is active" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EditForm;

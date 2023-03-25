import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddUser() {

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(
        {
            userName: "",
            userEmail: "",
            userPass: 0
        }
    )


    const changingValues = (evn) => {
        console.log(evn.target);
        switch (evn.target.name) {
            case "userEmail":

                break;
            case "userPass":

                break;
            default:
                break;
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='userEmail' type="email" placeholder="Enter email" value={user.userName} onChange={(evn) => { changingValues(evn) }} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='userPass' type="password" placeholder="Password" value={user.userPass} onChange={(evn) => { changingValues(evn) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddUser;
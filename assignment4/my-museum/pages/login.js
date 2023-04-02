import { Card, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { authenticateUser } from '@/lib/auth'
import { useRouter } from 'next/router';
import Alert from '@/components/Alert';

export default function Login() {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const [successful, setSuccessful] = useState(false);

    async function submitForm(e) {
        e.preventDefault();
        try {
            await authenticateUser(userName, password);
            setSuccessful(true);
            //router.push('/favorites')
        }
        catch (err) {
            setSuccessful(false);
            setWarning(err.message);
        }
    }

    function clearAlert() {
        setWarning("");
        setUserName("");
        setPassword("");
    }

    return (
        <>
            <Card bg="light">
                <Card.Body><h4>Login</h4>Please enter your login information below:</Card.Body>
            </Card>
            <br />
            <Form onSubmit={submitForm}>
                {warning && <Alert type={"alert-danger"} title={"Error!"} message={`${warning}, please try again`} action={clearAlert} />}
                {successful && <Alert type={"alert-success"} title={"Success!"} message={"Login successful, page redirecting..."} action={clearAlert} />}
                <Form.Group>
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control type="text" id="userName" name="userName" value={userName} onChange={e => setUserName(e.target.value)} /></Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <br />
                <Button variant="primary" className="pull-right" type="submit">Login</Button>
            </Form>
        </>
    )
}

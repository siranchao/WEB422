import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MainNav() {

    const router = useRouter()
    const [formData, setFormData] = useState("")

    const handleChange = (event) => {
        setFormData(event.target.value)
    }
    const handleSubmit = (event) => {
        const route = `/movies/${formData}`
        event.preventDefault()
        setFormData("")
        router.push(route)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Siran Cao</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
                            <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
                        </Nav>

                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Title (case sensitive)"
                                className="me-2"
                                aria-label="Search"
                                onChange={handleChange}
                                value={formData}
                            />
                            <Button variant="outline-success" type='submit'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

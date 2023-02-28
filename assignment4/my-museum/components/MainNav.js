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

    const handleChange = (e) => {
        setFormData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const route = `/artwork?title=true&q=${formData} `
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
                            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
                            <Link href="/search" passHref legacyBehavior><Nav.Link>Advanced Search</Nav.Link></Link>
                        </Nav>

                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Artwork Title"
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

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
    const [isExpanded, setIsExpanded] = useState(false)

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const route = `/artwork?title=true&q=${formData} `
        setFormData("")
        router.push(route)
    }

    const collapseNav = () => {
        setIsExpanded(false)
    }

    return (
        <>
            <Navbar variant="dark" expand="lg" fixed="top" bg="primary" expanded={isExpanded}>
                <Container>
                    <Navbar.Brand><Link href="/" passHref legacyBehavior><Nav.Link onClick={collapseNav}>Siran Cao</Nav.Link></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        &nbsp;
                        <Nav className="me-auto">
                            <Link href="/" passHref legacyBehavior><Nav.Link onClick={collapseNav}>Home</Nav.Link></Link>
                            <Link href="/search" passHref legacyBehavior><Nav.Link onClick={collapseNav}>Advanced Search</Nav.Link></Link>
                        </Nav>
                        &nbsp;
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Artwork Title"
                                className="me-2"
                                aria-label="Search"
                                onChange={handleChange}
                                value={formData}
                            />
                            <Button variant="outline-success" type='submit' onClick={collapseNav}>Search</Button>
                        </Form>
                        &nbsp;
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

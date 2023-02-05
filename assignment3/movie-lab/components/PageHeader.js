import Card from 'react-bootstrap/Card';

export default function PageHeader({ text }) {
    return (
        <>
            <Card bg="light" border="primary">
                <Card.Body>
                    {text}
                </Card.Body>
            </Card>
            <br />
        </>

    );
}


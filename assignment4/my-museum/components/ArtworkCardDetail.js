import useSWR from 'swr'
import Error from 'next/error'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function ArtworkCard({ objectID }) {

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)

    return (
        error ?
            <Error statusCode={404} />
            :
            data ?
                <>
                    <Card style={{ width: '18rem' }}>
                        {data.primaryImage && <Card.Img variant="top" src={data.primaryImage} />}

                        <Card.Body>
                            <Card.Title>{data.title ? data.title : "N/A"}</Card.Title>
                            <Card.Text>
                                <strong>Date: </strong>{data.objectDate ? data.objectDate : "N/A"}
                            </Card.Text>
                            <Card.Text>
                                <strong>Classification: </strong>{data.classification ? data.classification : "N/A"}
                            </Card.Text>
                            <Card.Text>
                                <strong>Medium: </strong>{data.medium ? data.medium : "N/A"}
                            </Card.Text>
                            <br />
                            <br />

                            <Card.Text>
                                <strong>Artist: </strong>{data.artistDisplayName ? data.artistDisplayName : "N/A"}
                                {data.artistDisplayName && <span>(<a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a>)</span>}
                            </Card.Text>
                            <Card.Text>
                                <strong>Credit Line: </strong>{data.creditLine ? data.creditLine : "N/A"}
                            </Card.Text>
                            <Card.Text>
                                <strong>Dimensions: </strong>{data.dimensions ? data.dimensions : "N/A"}
                            </Card.Text>



                            <Link href={`/artwork/${objectID}`} passHref>
                                <Button variant="primary">
                                    <strong>ID: </strong>{objectID}
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </>
                :
                null
    )
}
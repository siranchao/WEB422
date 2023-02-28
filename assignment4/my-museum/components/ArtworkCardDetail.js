import useSWR from 'swr'
import Error from 'next/error'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';

export default function ArtworkCard({ objectID }) {
    const router = useRouter()
    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)

    return (
        error ?
            <Error statusCode={404} />
            :
            data ?
                <>
                    <Card>
                        {data.primaryImage && <Card.Img variant="top" src={data.primaryImage} />}

                        <Card.Body>
                            <Card.Title>{data.title ? data.title : "N/A"}</Card.Title>
                            <section style={{ paddingBottom: "1.5rem" }}>
                                <div><strong>Date: </strong>{data.objectDate ? data.objectDate : "N/A"}</div>
                                <div><strong>Classification: </strong>{data.classification ? data.classification : "N/A"}</div>
                                <div><strong>Medium: </strong>{data.medium ? data.medium : "N/A"}</div>
                            </section>

                            <br />
                            <section>
                                <div><strong>Artist: </strong>{data.artistDisplayName ? data.artistDisplayName : "N/A"}
                                    {data.artistDisplayName && <span> (<a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a>)</span>}
                                </div>
                                <div><strong>Credit Line: </strong>{data.creditLine ? data.creditLine : "N/A"}</div>
                                <div><strong>Dimensions: </strong>{data.dimensions ? data.dimensions : "N/A"}</div>
                            </section>
                            <br />
                            <Button variant="outline-secondary" onClick={() => router.back()} style={{ width: "80px" }}>
                                Back
                            </Button>
                        </Card.Body>
                    </Card>
                </>
                :
                null
    )
}
import useSWR from 'swr'
import Error from 'next/error'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import styles from '@/styles/style.module.css'

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
                            <section className={styles.textArea}>
                                <div><span className={styles.highlightText}>Date: </span>{data.objectDate ? data.objectDate : "N/A"}</div>
                                <div><span className={styles.highlightText}>Classification: </span>{data.classification ? data.classification : "N/A"}</div>
                                <div><span className={styles.highlightText}>Medium: </span>{data.medium ? data.medium : "N/A"}</div>
                            </section>

                            <br />
                            <section className={styles.textArea}>
                                <div><span className={styles.highlightText}>Artist: </span>{data.artistDisplayName ? data.artistDisplayName : "N/A"}
                                    {data.artistDisplayName && <span> (<a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a>)</span>}
                                </div>
                                <div><span className={styles.highlightText}>Credit Line: </span>{data.creditLine ? data.creditLine : "N/A"}</div>
                                <div><span className={styles.highlightText}>Dimensions: </span>{data.dimensions ? data.dimensions : "N/A"}</div>
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
import { Accordion } from "react-bootstrap";
import MovieDetail from '@/components/MovieDetail'
import Link from 'next/link';
import * as styles from '@/styles/style.module.css'

export default function MovieList({ movies }) {

    return (
        <Accordion>
            {
                movies.map((element) => (
                    <Accordion.Item eventKey={element._id} key={element._id}>
                        <Accordion.Header>
                            <strong>{element.title}</strong>
                            &nbsp;
                            {`(${element.year}: Directed By ${element.directors.join(", ")})`}
                        </Accordion.Header>
                        <Accordion.Body>
                            <MovieDetail movie={element} />
                            <Link className={styles.learnMore} href={`/movieById/${element._id}`}>Learn More</Link>
                        </Accordion.Body>

                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
}



import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function MovieDetail({ movie }) {

    return (
        <Container>
            <Row>
                {movie.poster &&
                    <Col md>
                        <img className="w-100" src={movie.poster} alt="Poster" />
                        <br />
                        <br />
                    </Col>
                }

                <Col md>
                    <strong>Directed By:</strong> {movie.directors.join(", ")}<br /><br />
                    <p>{movie.fullplot ? movie.fullplot : "N/A"}</p>
                    <strong>Cast:</strong> {movie.cast ? movie.cast.join(", ") : "N/A"}<br /><br />
                    <strong>Awards:</strong> {movie.awards.text ? movie.awards.text : "N/A"}<br />
                    <strong>IMDB Rating:</strong> {movie.imdb.rating} ({movie.imdb.votes} votes)

                </Col>
            </Row>
        </Container>
    )
}
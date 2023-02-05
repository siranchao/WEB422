import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MovieDetail from '../components/MovieDetail';
import PageHeader from '../components/PageHeader';


// Fetching static data from api for re-render html page
export async function getStaticProps() {
    const res = await fetch('https://misty-mite-purse.cyclic.app/api/movies/573a13b3f29313caabd3ca06')
    const movie = await res.json();

    return { props: { staticMovie: movie.data } }
}




export default function About({ staticMovie }) {

    return (
        <Container>
            <PageHeader text={"About the Developer: Siran Cao"} />
            <Card>
                <Card.Body>
                    <Card.Text>
                        On July 4, 1969, a killer shoots a couple on lovers' lane in Vallejo, California. The boy survives. The San Francisco Chronicle receives a letter from the Zodiac killer to print his letters with symbols. Reporter Paul Avery (Robert Downey, Jr) is on the case with the help of eager cartoonist Robert Graysmith (Jake Gyllenhaal). The brutal murders continue moving to San Francisco. San Francisco police detectives Dave Toschi (Mark Ruffalo) and William Armstrong (Anthony Edwards) are given the case. Other police include Jack Mulanax (Elias Koteas) in Vallejo and Detective Ken Narlow (Donal Logue) in Napa. Defense lawyer Melvin Belli (Brian Cox) appearing on TV gets a call from the supposed killer.
                    </Card.Text>
                    <Card.Text>
                        This starts off as an interesting serial killer mystery. The attacks are horrifically shown. The couple forced to be tied up and stabbed is probably the most memorable. However the movie turns into something deeper. This is not another serial killer movie like the endless TV shows that populate modern networks. It may not even be about the central characters. This is an immersive experience living with the serial killer always on the mind. The Zodiac killer is just out there in this world. It's fascinating in its dark undertones and the lack of flashiness.
                    </Card.Text>
                    <Card.Text>The movie <Link href="/movies/Zodiac">Zodiac</Link> is one of my favorites, and it was also considered as one of the best movies in the history.</Card.Text>
                </Card.Body>

                <hr /><br />
                <MovieDetail movie={staticMovie} />
            </Card>
        </Container>

    )
}
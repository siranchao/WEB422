import MovieDetail from '@/components/MovieDetail'
import PageHeader from '@/components/PageHeader'
import { useRouter } from 'next/router'
import Error from 'next/error'
import Link from 'next/link'
import useSWR from 'swr'
import { Container } from 'react-bootstrap'

export default function Movie() {

    //get movie title by Next.js router hook
    const router = useRouter()
    const { title } = router.query

    //request data
    const { data, error } = useSWR(`https://misty-mite-purse.cyclic.app/api/movies?page=1&perPage=10&title=${title}`)

    return (
        !data ?
            <>
                <br /><div>Ops! We couldn&apos;t find any movie by this name</div><br />
                <Link href="/">Back</Link>
            </>
            :
            data.data.length === 0 ? <Error statusCode={404} />
                :
                <Container>
                    {data.data.map(element => (
                        <div key={element._id}>
                            <PageHeader text={title} />
                            <MovieDetail movie={element} />
                            <hr />
                        </div>
                    )
                    )}
                </Container>
    )
}
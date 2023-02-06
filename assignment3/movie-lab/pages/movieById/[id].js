import MovieDetail from '@/components/MovieDetail'
import PageHeader from '@/components/PageHeader'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import { Container } from 'react-bootstrap'

export default function SingleMovie() {

    const router = useRouter()
    const { id } = router.query

    const { data, error } = useSWR(`https://misty-mite-purse.cyclic.app/api/movies/${id}`)

    return (
        !data ?
            <>
                <br /><div>Ops! We couldn&apos;t find any movie by this name</div><br />
                <Link href="/">Back</Link>
            </>
            :
            <Container>
                <PageHeader text={data.data.title} />
                <MovieDetail movie={data.data} />
            </Container>
    )
}
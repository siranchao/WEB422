/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Siran Cao     Student ID: 159235209        Date: 02/05/2023
*
*
********************************************************************************/

import Head from 'next/head'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Container, Pagination } from 'react-bootstrap'
import PageHeader from '@/components/PageHeader'
import MovieList from '@/components/MovieList'


export default function Home() {

  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useState([])

  const { data, error } = useSWR(`https://misty-mite-purse.cyclic.app/api/movies?page=${page}&perPage=10`)

  useEffect(() => {
    if (data) {
      setPageData(data.data)
    }
  }, [data])

  const previousPage = () => {
    if (page > 1)
      setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <>
      <Head>
        <title>My Movie Lab</title>
        <meta name="Movie-Lab" content="Created by Siran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <PageHeader text={"Film Collection: Sorted by Date"} />
        <br />
        {error ?
          <div>Loading Data Failed</div>
          :
          !data ? <div>Loading Data...</div> : <MovieList movies={pageData} />
        }
        <br />
        <Pagination>
          <Pagination.Prev onClick={previousPage} />
          <Pagination.Item>{page}</Pagination.Item>
          <Pagination.Next onClick={nextPage} />
        </Pagination>
      </Container>
    </>
  )
}

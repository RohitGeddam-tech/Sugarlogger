import React, { useState } from "react"
import Cards from "./Cards"
import CardBox from "./CardBox"
import Pagination from "./PaginationComponent"

const Host = () => {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = CardBox.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <Cards posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={CardBox.length}
        paginate={paginate}
      />
    </>
  )
}

export default Host

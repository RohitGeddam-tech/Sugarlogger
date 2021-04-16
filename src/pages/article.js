import React from "react"
import MainArticle from "../components/MainArticle"
import ClientOnly from '../utils/ClientOnly'

const article = () => {
  return (
    <ClientOnly>
      <MainArticle />
    </ClientOnly>
  )
}

export default article

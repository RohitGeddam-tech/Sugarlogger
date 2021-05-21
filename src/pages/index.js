import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GenresNav from "../Home/GenreNavPage"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <GenresNav />
  </Layout>
)

export default IndexPage

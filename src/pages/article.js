import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../Article/Article"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Article />
  </Layout>
)

export default IndexPage

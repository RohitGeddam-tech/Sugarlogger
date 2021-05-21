import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GenresNav from "../Genre/Genre"

const SecondPage = () => (
  <Layout>
    <Seo title="Home" />
    <GenresNav />
  </Layout>
)

export default SecondPage

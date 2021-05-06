import * as React from "react"
import Home from "../Viewmode/home"
import ClientOnly from "../utils/ClientOnly"

const IndexPage = () => (
  <ClientOnly>
    <Home />
  </ClientOnly>
)

export default IndexPage

import * as React from "react"
import SecondBox from "../components/SecondBox"
import ClientOnly from "../utils/ClientOnly"

const SecondPage = () => {
  return (
    <ClientOnly>
      <SecondBox />
    </ClientOnly>
  )
}

export default SecondPage

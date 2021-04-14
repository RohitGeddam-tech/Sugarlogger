import * as React from "react"
import "./css/Footer.css"
import FooterDesk from "./components/Footer"
import { useState, useEffect } from "react"
import Footer from './components/FooterTab'
import FooterMob from './components/FooterMob'

const Header = () => {
  const [isLarge, setLarge] = useState(
    window.matchMedia("(max-width:1400px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
    })
  })

  const [isTab, setTab] = useState(
    window.matchMedia("(max-width:900px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:900px)").matches)
    })
  })

  const [isMob, setMob] = useState(
    window.matchMedia("(max-width:550px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMob(window.matchMedia("(max-width:550px)").matches)
    })
  })

  return (
    <>
      {isLarge ? (
        <>
          {isTab ? (
            <>{isMob ? <FooterMob /> : <Footer />}</>
          ) : (
            <>
              <FooterDesk />
            </>
          )}
        </>
      ) : (
        <div className="large-footer">
          <FooterDesk />
        </div>
      )}
    </>
  )
}

export default Header

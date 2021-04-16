import * as React from "react"
import "./css/Footer.css"
import FooterDesk from "./components/Footer"
import { useState, useEffect } from "react"
import Footer from './components/FooterTab'
import FooterMob from './components/FooterMob'

const Header = () => {
  const [isLarge, setLarge] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width:1400px)").matches : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
    })
  }, [isLarge])

  const [isTab, setTab] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width:900px)").matches : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:900px)").matches)
    })
  }, [isTab])

  const [isMob, setMob] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width:550px)").matches : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMob(window.matchMedia("(max-width:550px)").matches)
    })
  }, [isMob])

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

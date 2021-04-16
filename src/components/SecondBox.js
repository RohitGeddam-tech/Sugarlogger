import React, { useEffect, useState } from "react"
import SecondTab from "./components/SecondTab"
import SecondPage from "./components/SecondPage"
import SecondMob from "./components/SecondMob"
import Header from "./components/header"
import HeaderMob from "./Nav"
import Footer from "./components/Footer"
import FooterMob from "./components/FooterMob"
import FooterTab from "./components/FooterTab"
import SEO from "./seo"

const Mob = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <SecondMob />
      <FooterMob />
    </>
  )
}

const Tab = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <SecondTab />
      <FooterTab />
    </>
  )
}

const Pro = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <SecondPage />
      <FooterTab />
    </>
  )
}

const Desk = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <SecondPage />
      <Footer />
    </>
  )
}

const Large = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <div className="largesize">
        <div className="largesize-container">
          <SecondPage />
        </div>
      </div>
      <div className="large-footer">
        <div className="largesize-container">
          <Footer />
        </div>
      </div>
    </>
  )
}

const SecondBox = () => {
  const [isLarge, setLarge] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width:1400px)").matches : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
    })
  }, [isLarge])

  const [isPro, setPro] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width:1080px)").matches : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setPro(window.matchMedia("(max-width:1080px)").matches)
    })
  }, [isPro])

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
          {isPro ? (
            <>{isTab ? <>{isMob ? <Mob /> : <Tab />}</> : <Pro />}</>
          ) : (
            <Desk />
          )}
        </>
      ) : (
        <Large />
      )}
    </>
  )
}

export default SecondBox

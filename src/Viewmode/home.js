import React, { useState, useEffect } from "react"
import Header from "../components/components/header"
import HeaderMob from "../components/Nav"
import Footer from "../components/components/Footer"
import FooterMob from "../components/components/FooterMob"
import FooterTab from "../components/components/FooterTab"
import SEO from "../components/seo"
import FirstPage from "../components/components/FirstPage"
import SecondPage from "../components/components/SecondPage"
import SecondMob from "../components/components/SecondMob"
import SecondTab from "../components/components/SecondTab"
import FirstMob from "../components/components/FirstPageMob"

const Large = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <div className="largesize">
        <div className="largesize-container">
          <FirstPage />
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

const Desk = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <FirstPage />
      <SecondPage />
      <Footer />
    </>
  )
}

const Pro = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <FirstPage />
      <SecondPage />
      <FooterTab />
    </>
  )
}

const Tab = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <FirstPage />
      <SecondTab />
      <FooterTab />
    </>
  )
}

const Mob = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <div className="home-header">
        <div className="home-container">
          <h1>blogs</h1>
          <h2>Stay updated with us</h2>
        </div>
      </div>
      <FirstMob />
      <SecondMob />
      <FooterMob />
    </>
  )
}

const Home = () => {
  const [isTab, setTab] = useState(
    window.matchMedia("(max-width:900px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:900px)").matches)
    })
  })

  const [isPro, setPro] = useState(
    window.matchMedia("(max-width:1080px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setPro(window.matchMedia("(max-width:1080px)").matches)
    })
  })

  const [isLarge, setLarge] = useState(
    window.matchMedia("(max-width:1400px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
    })
  })

  const [isMob, setMob] = useState(
    window.matchMedia("(max-width:600px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMob(window.matchMedia("(max-width:600px)").matches)
    })
  })

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
        <>
          <Large />
        </>
      )}
    </>
  )
}

export default Home

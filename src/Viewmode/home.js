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
import GenresNav from "../utils/GenresNav"
import NavLinks from "../components/components/NavLinks"

const Large = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <div style={{ paddingTop: "80px" }}>
        <div className="largesize">
          <div className="largesize-container">
            <FirstPage />
            <div className="genres-bar">
              <GenresNav NavLinks={NavLinks} space="0" bottom='24%' />
            </div>
            <SecondPage />
          </div>
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
      <div style={{ paddingTop: "80px" }}>
        <FirstPage />
        <div className="genres-bar">
          <GenresNav NavLinks={NavLinks} space="0.65" bottom='24%'/>
        </div>
        <SecondPage />
      </div>
      <Footer />
    </>
  )
}

const Pro = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <div style={{ paddingTop: "90px" }}>
        <FirstPage />
        <div className="genres-bar">
          <GenresNav NavLinks={NavLinks} space="0.57" bottom='68%' />
        </div>
        <SecondPage />
      </div>
      <FooterTab />
    </>
  )
}

const Tab = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <div style={{ paddingTop: "80px" }}>
        <FirstPage />
        <div className="genres-bar">
          <GenresNav NavLinks={NavLinks} space="0.45" bottom='58%' />
        </div>
      </div>
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
      <div style={{ paddingTop: "80px" }}>
        <div className="home-header">
          <div className="home-container">
            <h1>blogs</h1>
            <h2>Stay updated with us</h2>
          </div>
        </div>
        <FirstMob />
        <div className="genres-mobbar">
          <GenresNav NavLinks={NavLinks} space="0.15" bottom='100%' />
        </div>
        <SecondMob />
      </div>
      <FooterMob />
    </>
  )
}

const Home = () => {
  const [isTab, setTab] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:930px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:930px)").matches)
    })
  }, [isTab])

  const [isPro, setPro] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:1080px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setPro(window.matchMedia("(max-width:1080px)").matches)
    })
  }, [isPro])

  const [isLarge, setLarge] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:1400px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
    })
  }, [isLarge])

  const [isMob, setMob] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:700px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMob(window.matchMedia("(max-width:700px)").matches)
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
        <>
          <Large />
        </>
      )}
    </>
  )
}

export default Home

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
import GenresNav from "../utils/GenreNavPage"
import NavLinks from "./components/NavLinks"

const Mob = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <div style={{ paddingTop: "100px" }}></div>
      <div className="genres-mobbar">
        <GenresNav NavLinks={NavLinks} space="0.15" />
      </div>
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
      <div style={{ paddingTop: "100px" }}></div>
      <div className="genres-bar">
        <GenresNav NavLinks={NavLinks} space="0.45" />
      </div>
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
      <div style={{ paddingTop: "100px" }}></div>
      <div className="genres-bar">
        <GenresNav NavLinks={NavLinks} space="0.57" />
      </div>
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
      <div style={{ paddingTop: "100px" }}></div>
      <div className="genres-bar">
        <GenresNav NavLinks={NavLinks} space="0.65" />
      </div>
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
      <div style={{ paddingTop: "100px" }}></div>
      <div className="genres-bar">
        <GenresNav NavLinks={NavLinks} space="0" />
      </div>
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
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:1400px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
    })
  }, [isLarge])

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

  const [isTab, setTab] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:900px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:900px)").matches)
    })
  }, [isTab])

  const [isMob, setMob] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:550px)").matches
      : null
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

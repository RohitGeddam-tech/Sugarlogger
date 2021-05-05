import React, { useEffect, useState } from "react"
import Firstarticlen from "./Article/Firstarticle"
import FirstDesk from "./Article/FirstDesk"
import FirstTab from "./Article/FirstTab"
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
      <div style={{ paddingTop: "100px" }}></div>
      <div className="article-padding">
        <Firstarticlen />
      </div>
      <FooterMob />
    </>
  )
}

const Tab = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <div style={{ paddingTop: "80px" }}></div>
      <FirstTab />
      <FooterTab />
    </>
  )
}

const Pro = () => {
  return (
    <>
      <HeaderMob />
      <SEO title="Home" />
      <div style={{ paddingTop: "80px" }}></div>
      <FirstDesk />
      <FooterTab />
    </>
  )
}

const Desk = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <div style={{ paddingTop: "80px" }}></div>
      <FirstDesk />
      <Footer />
    </>
  )
}

const Large = () => {
  return (
    <>
      <Header />
      <SEO title="Home" />
      <div style={{ paddingTop: "80px" }}></div>
      <div className="largesize">
        <div className="largesize-container">
          <FirstDesk />
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

const MainArticle = () => {
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
    typeof window !== "undefined" ? window.matchMedia("(max-width:650px)").matches : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMob(window.matchMedia("(max-width:650px)").matches)
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

export default MainArticle

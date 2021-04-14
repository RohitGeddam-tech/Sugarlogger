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
    window.matchMedia("(max-width:1400px)").matches
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLarge(window.matchMedia("(max-width:1400px)").matches)
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

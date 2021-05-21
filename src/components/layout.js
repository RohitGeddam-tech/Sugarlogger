/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {useState, useEffect} from 'react'
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'
import Nav from './Nav'
import Clientonly from './ClientOnly'
import "./layout.css"
import FooterMob from "./FooterMob"

const Layout = ({ children }) => {
  const [isTab, setTab] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:1170px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setTab(window.matchMedia("(max-width:1170px)").matches)
    })
  }, [isTab])

  const [isMob, setMob] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:650px)").matches
      : null
  )
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMob(window.matchMedia("(max-width:650px)").matches)
    })
  }, [isMob])

  return (
    <Clientonly>
      {isTab ? <Nav /> : <Header />}
      <div className='top-pad'>{children}</div>
      {isMob ? <FooterMob /> : <Footer />}
    </Clientonly>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

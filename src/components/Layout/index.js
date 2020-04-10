import React, { useState } from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import GlobalStyles from "../../styles/global"
import Sidebar from "../Sidebar"
import SidebarMobile from "../SidebarMobile"
import MenuMobile from "../MenuMobile"
import * as S from "./styled"

const Layout = ({ children, isCovidPage, isCovidSubPage }) => {
  const [covidPage, setCovidPage] = useState(false)

  const WhatPage = page => {
    setCovidPage(page)
  }

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal>
        <Sidebar />
      </TransitionPortal>
      <SidebarMobile isCovidPage={isCovidPage} isCovidSubPage={isCovidSubPage} />
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuMobile />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

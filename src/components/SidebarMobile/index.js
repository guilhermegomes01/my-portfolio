import React from "react"

import Profile from "../Profile"
import About from "../About"
import * as S from "./styled"
import MenuLinks from "../MenuLinks"

const SidebarMobile = ({ isCovidPage, isCovidSubPage }) => (
  <S.SidebarMobWrapper
    className={
      isCovidPage || isCovidSubPage ? "sidebar-container covid-page" : "sidebar-container"
    }
  >
    <S.SidebarMobTop>
      <Profile />
      <About />
    </S.SidebarMobTop>
    <MenuLinks />
  </S.SidebarMobWrapper>
)

export default SidebarMobile

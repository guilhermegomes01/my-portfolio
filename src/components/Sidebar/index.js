import React from 'react'

import Profile from '../Profile'
import About from '../About'
import * as S from './styled'
import MenuLinks from '../MenuLinks'

const Sidebar = () => (
  <S.SidebarWrapper className="sidebar-container">
    <S.SidebarTop>
      <Profile />
      <About />
    </S.SidebarTop>
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
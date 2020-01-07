import React from 'react'

import Profile from '../Profile'
import About from '../About'
import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.SidebarTop>
      <Profile />
      <About />
    </S.SidebarTop>
  </S.SidebarWrapper>
)

export default Sidebar
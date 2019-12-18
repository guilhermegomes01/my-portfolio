import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ProfileWrapper = styled.section`
  display: flex;
`

export const ProfileLink = styled(AniLink)`
  text-decoration: none;
`

export const ProfileDescription = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
`

export const ProfileAuthor = styled.h1`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`

export const ProfilePosition = styled.h2`
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
`
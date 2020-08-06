import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ProfileWrapper = styled.section`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #777777;
`

export const ProfileLink = styled(AniLink)`
  text-decoration: none;
`

export const ProfileDescription = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-left: 15px;
`

export const ProfileAuthor = styled.h1`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  ${media.lessThan("991.98px")`
    font-size: 14px;
  `}

  ${media.between("992px", "1199.98px")`
    font-size: 14px;
  `}
`

export const ProfilePosition = styled.h2`
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;

  ${media.lessThan("991.98px")`
    font-size: 14px;
  `}

  ${media.between("992px", "1199.98px")`
    font-size: 14px;
  `}
`
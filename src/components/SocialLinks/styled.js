import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 15px;

  ${media.lessThan("991.98px")`
    margin-top: 10px;
  `}
`

export const SocialLinksItem = styled.li`
  padding-right: 7px;
`

export const SocialLinksLink = styled.a`
  text-decoration: none;

`

export const IconItem = styled.div`
  color: #A5A5A5;
  width: 28px;
  height: 28px;

  &:hover {
    color: #fff;
    transition: 1s;
  }

  ${media.lessThan("991.98px")`
    width: 24px;
    height: 24px;
  `}
`
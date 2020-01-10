import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuLinksWrapper = styled.nav`
    ${media.lessThan("991.98px")`
        display: none;
    `}
`

export const MenuLinksList = styled.ul`
    padding: 25px 35px;
`

export const MenuLinksItem = styled.li`
    margin-bottom: 15px;

    &:nth-child(-n+3)::after {
        content: '';
        background: #777777;
        height: 1px;
        width: 148px;
        display: block;
        margin-top: 10px;
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: #A5A5A5;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;

    &.actived {
        font-weight: bold;
    }
`
import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuMobWrapper = styled.nav`
    display: none;

    ${media.lessThan("991.98px")`
        display: block;
        position: fixed;
        background: #585858;
        width: 100%;
        bottom: 0;
    `}
`

export const MenuMobList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding-right: 10px;
`

export const MenuMobItem = styled.li`
    color: #A5A5A5;
    &:nth-child(-n+3) {
        padding-right: 10px;
        border-right: 1px solid #A5A5A5;
    }

    &:nth-child(n+2) {
        padding-left: 10px;
        border-left: 1px solid #242424;
    }
`

export const MenuMobLink = styled(AniLink)`
    color: #A5A5A5;
    svg {
        width: 30px;
        height: 30px;
        path {
            fill: #A5A5A5;
        }
    }

    &.actived {
        svg {
            path {
                fill: #1edfd5;
            }
        }
    }
`
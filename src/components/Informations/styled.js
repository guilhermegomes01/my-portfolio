import styled from "styled-components"
import media from "styled-media-query"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Section = styled.section`
    margin-top: 40px;

    &.button {
        margin-top: 0px;
    }

    ${media.lessThan("991.98px")`
        width: 17rem;
        margin: 30px auto 90px;
        flex-direction: column;

        &.button {
            margin-bottom: 0px;
        }
    `}
`

export const Paragraph = styled.p`
    margin-bottom: 16px;
    line-height: 20px;

    &.titleList {
        margin-bottom: 0px;
    }

    &.source {
        font-weight: bold;
    }
`

export const List = styled.ul`
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 16px;
`

export const ListItem = styled.li`
    line-height: 20px;
    list-style: circle;
`

export const Button = styled(AniLink)`
    margin-top: 30px;
    font-family: "Quicksand";
    display: inline-flex;
    align-items: center;
    color: #A5A5A5;
    padding: 5px 15px;
    border: 1px solid;
    border-radius: 3px;
    background: transparent;
    text-decoration: none;
    transition: .5s;

    &:hover {
        background: #a5a5a5;
        color: #242424;
    }

    svg {
        width: 20px;
        height: auto;
    }
`

export const Span = styled.span`
    font-size: 16px;
    padding-left: 10px;
    text-transform: uppercase;
`
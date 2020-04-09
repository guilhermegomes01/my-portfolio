import styled from "styled-components"
import media from "styled-media-query"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const TemplateWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.cities {
    flex-wrap: wrap;
  }

  &.first {
    margin-top: 20px;
  }

  &.select-state {
    margin-top: 30px;
  }

  &.social-links {
    justify-content: flex-start;
    align-items: center;

    .share-button {
      margin-right: 10px;
    }
  }



  ${media.lessThan("991.98px")`
      width: 17rem;
      margin: 30px auto 0px;
      flex-direction: column;

      &.social-links {
        flex-direction: row;
        
        .text-share {
          flex-basis: 100%;
          margin-bottom: 15px;
        }
      }
  `}
`

export const TemplateFeatures = styled.section`
  flex-direction: column;
  p,
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  ${media.lessThan("991.98px")`
        width: 17rem;
        margin: 30px auto 90px;
    `}

  ${media.greaterThan("992px")`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    `}
`

export const TemplateDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  margin: auto;

  div {
    position: absolute;
    border: 4px solid #333;
    opacity: 1;
    border-radius: 50%;
    animation: loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }

  @keyframes loader {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
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

  ${media.lessThan("991.98px")`
      margin-top: 0px;
  `}
`

export const Span = styled.span`
  font-size: 16px;
  padding-right: 10px;
  text-transform: uppercase;

  ${media.lessThan("991.98px")`
      font-size: 15px;
      padding-right: 5px;
  `}
`

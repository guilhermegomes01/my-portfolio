import styled from "styled-components"
import media from "styled-media-query"

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

  ${media.lessThan("991.98px")`
        width: 17rem;
        margin: 30px auto 0px;
        flex-direction: column;
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

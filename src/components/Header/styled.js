import styled from "styled-components"
import media from 'styled-media-query'

export const HeaderWrapper = styled.section`
  height: 70px;
  width: 100%;
  background: #242424;
  position: fixed;
  z-index: 1;

  ${media.lessThan("991.98px")`
    display: none;
  `}
`

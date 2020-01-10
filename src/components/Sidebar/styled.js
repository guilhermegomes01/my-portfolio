import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  height: 100vh;
  position: fixed;
  padding: 0px 100px;
  width: 20rem;
  background-color: #242424;
  margin-top: 70px;

  ${media.lessThan("991.98px")`
    padding: 0;
    width: 17rem;
    position: inherit;
    height: auto;
    background: transparent;
    margin: 0;
    transform: translate(-50%)
  `}
`

export const SidebarTop = styled.section`
  background-color: #585858;
  padding: 35px;
  border-radius: 10px;

  ${media.lessThan("991.98px")`
    padding: 25px;
  `}
`
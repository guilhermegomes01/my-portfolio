import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarMobWrapper = styled.aside`
  display: none;
  
  ${media.lessThan("991.98px")`
    display: block;
    padding: 0;
    width: 17rem;
    position: inherit;
    height: auto;
    background: transparent;
    margin: 30px auto 0;
    
    &.covid-page {
      order: 2;
      margin-top: 0;
      margin-bottom: 100px;
    }
  `}
`

export const SidebarMobTop = styled.section`
  background-color: #585858;
  padding: 35px;
  border-radius: 10px;

  ${media.lessThan("991.98px")`
    padding: 25px;


  `}
`
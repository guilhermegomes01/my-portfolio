import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 70px;

  ${media.lessThan("991.98px")`
    flex-direction: column;
    padding: 0;
  `}
`

export const LayoutMain = styled.section`
  min-height: 100vh;
  padding-left: 530px;
  padding-right: 100px;
  width: 100%;

  ${media.lessThan("991.98px")`
    padding: 0;
    min-height: auto;
  `}

  ${media.between("992px", "1199.98px")`
    padding-left: 430px;
    padding-right: 60px;
  `}
`
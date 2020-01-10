import styled from 'styled-components'
import media from 'styled-media-query'

export const PageTitle = styled.section`
  display: flex;
  align-items: center;

  h2 {
    font-size: 35px;
    text-transform: uppercase;
  }

  svg {
    width: 28px;
    margin-right: 15px;
  }

  ${media.lessThan("991.98px")`
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 25px;

    svg {
      display: none;
    }
  `}

  ${media.lessThan("small")`
    h2 {
      text-align: left;
    }
    
  `}
`
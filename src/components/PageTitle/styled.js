import styled from 'styled-components'
import media from 'styled-media-query'

export const PageTitle = styled.section`
  display: flex;
  align-items: center;

  h2 {
    font-size: 35px;
    text-transform: uppercase;
    color: #A5A5A5;
  }

  svg {
    width: 28px;
    margin-right: 15px;
    color: #1edfd5;
  }

  ${media.lessThan("991.98px")`
    justify-content: center;
    width: 17rem;
    margin: 25px auto;

    h2 {
      text-align: left;
      width: 100%;
    }

    svg {
      display: none;
    }
  `}
`
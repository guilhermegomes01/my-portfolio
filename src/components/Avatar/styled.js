import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
  border-radius: 7px;
  width: 80px;
  height: 80px;

  ${media.lessThan("991.98px")`
    width: 60px;
    height: auto;
  `}

  ${media.between("992px", "1199.98px")`
    width: 70px;
    height: auto;
  `}
`
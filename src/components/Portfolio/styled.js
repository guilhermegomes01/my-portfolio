import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PortfolioWrapper = styled.section``

export const PortfolioFilter = styled.ul`
  margin-top: 50px;

  ${media.lessThan("991.98px")`
    display: none;
  `}
`

export const PortfolioFilterItem = styled.li`
  display: inline-block;
  margin-right: 15px;
  text-transform: uppercase;
  border: 1px solid;
  padding: 5px 15px;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;

  &.actived {
    background: #a5a5a5;
    color: #242424;
  }
`

export const PortfolioList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

  ${media.lessThan("991.98px")`
    justify-content: center;
    width: 17rem;
    margin: 0 auto;
  `}
`

export const PortfolioLink = styled.a`
  text-decoration: none;

  :focus {
    outline: none;
  }
`

export const PortfolioItems = styled.div`
  margin-bottom: 40px;
  flex-basis: 280px;

  ${media.lessThan("991.98px")`
    &:last-child {
      margin-bottom: 100px;
    }
  `}

  ${media.between("992px", "1199.98px")`
    width: 49%;
    flex-basis: 49%;
  `}
`

export const PortfolioItemTitle = styled.h3`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  margin-bottom: 6px;

  ${media.between("992px", "1199.98px")`
    font-size: 20px;
  `}
`

export const PortfolioType = styled.span`
  text-transform: uppercase;
  color: #242424;
  background-color: #1edfd5;
  border-radius: 3px;
  padding: 4px 9px;
  font-size: 12px;
`

export const ImagensWrapper = styled(Img)`
  border-radius: 7px;
  width: 280px;
  height: auto;
  margin-top: 15px;

  ${media.between("992px", "1199.98px")`
    width: 100%;
    max-width: 280px;
  `}
`

export const PortfolioDescription = styled.div`
  color: #fff;
  margin-top: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Technologies = styled.p`
  padding: 6px;
  text-align: center;
`

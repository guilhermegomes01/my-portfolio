import styled from 'styled-components'
import Img from 'gatsby-image'

export const PortfolioWrapper = styled.section`
`

export const PortfolioTitle = styled.section`
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
`

export const PortfolioFilter = styled.ul`
  margin-top: 50px;
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
    background: #A5A5A5;
    color: #242424;
  }
`

export const PortfolioList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
`

export const PortfolioItems = styled.div`
  margin-bottom: 40px;
`

export const PortfolioItemTitle = styled.h3`
    font-size: 22px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    margin-bottom: 6px;
`

export const PortfolioType = styled.span`
  text-transform: uppercase;
  color: #242424;
  background-color: #1EDFD5;
  border-radius: 3px;
  padding: 4px 9px;
  font-size: 12px;
`

export const ImagensWrapper = styled(Img)`
  border-radius: 7px;
  width: 290px;
  height: auto;
  margin-top: 15px;
`
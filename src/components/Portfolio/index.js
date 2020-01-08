import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"
import sites from "./content"

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Portfolio = () => {
  const { veneza, cca, melhorcom, novoNascer } = useStaticQuery(graphql`
    query {
      veneza: file(relativePath: { eq: "portfolio/venezawaterpark.png" }) {
        ...squareImage
      }
      cca: file(relativePath: { eq: "portfolio/ccaadvogados.png" }) {
        ...squareImage
      }
      melhorcom: file(relativePath: { eq: "portfolio/melhorcomunicacao.png" }) {
        ...squareImage
      }
      novoNascer: file(relativePath: { eq: "portfolio/novonascer.png" }) {
        ...squareImage
      }
    }
  `)

  const imgs = { veneza, cca, melhorcom, novoNascer }

  return (
    <S.PortfolioWrapper>
      <h2 className="page-title">Portfolio</h2>
      <S.PortfolioFilter>
        <S.PortfolioFilterItem>Todos</S.PortfolioFilterItem>
        <S.PortfolioFilterItem>Website</S.PortfolioFilterItem>
        <S.PortfolioFilterItem>Institucional</S.PortfolioFilterItem>
      </S.PortfolioFilter>
      <S.PortfolioList>
        {sites.map((site, index) => {
          return (
            <S.PortfolioItems key={index}>
              <S.PortfolioTitle>{site.title}</S.PortfolioTitle>
              <S.PortfolioType>{site.type}</S.PortfolioType>
              <S.ImagensWrapper fluid={imgs[site.name].childImageSharp.fluid} />
            </S.PortfolioItems>
          )
        })}
      </S.PortfolioList>
    </S.PortfolioWrapper>
  )
}

export default Portfolio

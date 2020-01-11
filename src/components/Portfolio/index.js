import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Icon from "../../images/svg-icons/surface1.svg"
import * as S from "./styled"
import sites from "./content"
import links from "../MenuLinks/content"
import PageTitle from '../PageTitle'

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
  const [institucional, setInstitucional] = useState(true)
  const [ecommerce, setEcommerce] = useState(true)

  /* Imagens */
  const { veneza, cca, melhorcom, novoNascer, agenciaCosmica } = useStaticQuery(graphql`
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
      agenciaCosmica: file(relativePath: { eq: "portfolio/agenciacosmica.png" }) {
        ...squareImage
      }
    }
  `)

  const imgs = { veneza, cca, melhorcom, novoNascer, agenciaCosmica }

  return (
    <S.PortfolioWrapper>
      <PageTitle>
        <Icon className="icon-title" />
        <h2 className="page-title">{links[0].label}</h2>
      </PageTitle>
      <S.PortfolioFilter>
        <S.PortfolioFilterItem
          className={institucional && ecommerce && "actived"}
          onClick={() => {
            setEcommerce(true)
            setInstitucional(true)
          }}
        >
          Todos
        </S.PortfolioFilterItem>
        <S.PortfolioFilterItem
          className={institucional && !ecommerce && "actived"}
          onClick={() => {
            setEcommerce(false)
            setInstitucional(true)
          }}
        >
          Institucional
        </S.PortfolioFilterItem>
        <S.PortfolioFilterItem
          className={!institucional & ecommerce && "actived"}
          onClick={() => {
            setInstitucional(false)
            setEcommerce(true)
          }}
        >
          E-Commerce
        </S.PortfolioFilterItem>
      </S.PortfolioFilter>
      <S.PortfolioList>
        {sites.map((site, index) => {
          const siteInstitucional = site.type === "Institucional"
          const siteEcommerce = site.type === "E-Commerce"
          return (
            <>
              {((institucional && siteInstitucional) ||
                (ecommerce && siteEcommerce)) && (
                
                <S.PortfolioItems key={index}>
                  <S.PortfolioLink href={site.url} target="_blank" title={site.title}>
                    <S.PortfolioItemTitle>{site.title}</S.PortfolioItemTitle>
                    <S.PortfolioType>{site.type}</S.PortfolioType>
                    <S.ImagensWrapper
                      fluid={imgs[site.name].childImageSharp.fluid}
                    />

                  </S.PortfolioLink>
                  <S.PortfolioDescription>
                    {site.description}
                  </S.PortfolioDescription>
                </S.PortfolioItems>
              )}
            </>
          )
        })}
      </S.PortfolioList>
    </S.PortfolioWrapper>
  )
}

export default Portfolio

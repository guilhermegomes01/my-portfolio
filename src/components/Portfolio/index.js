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
  const [mobileApps, setMobileApps] = useState(true);

  /* Imagens */
  const { pointsScorer, obapetMobile, obapet, veneza, cca, melhorcom, novoNascer, agenciaCosmica } = useStaticQuery(graphql`
    query {
      pointsScorer: file(relativePath: { eq: "portfolio/points-scorer-mobile.png" }) {
        ...squareImage
      }
      obapetMobile: file(relativePath: { eq: "portfolio/obapet-mobile.png" }) {
        ...squareImage
      }
      obapet: file(relativePath: { eq: "portfolio/obapet.png" }) {
        ...squareImage
      }
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

  const imgs = { pointsScorer, obapetMobile, obapet, veneza, cca, melhorcom, novoNascer, agenciaCosmica }

  return (
    <S.PortfolioWrapper>
      <PageTitle>
        <Icon className="icon-title" />
        <h2 className="page-title">{links[0].label}</h2>
      </PageTitle>
      <S.PortfolioFilter>
        <S.PortfolioFilterItem
          className={institucional && ecommerce && mobileApps && "actived"}
          onClick={() => {
            setEcommerce(true)
            setInstitucional(true)
            setMobileApps(true)
          }}
        >
          Todos
        </S.PortfolioFilterItem>
        <S.PortfolioFilterItem
          className={institucional && !ecommerce && !mobileApps && "actived"}
          onClick={() => {
            setEcommerce(false)
            setMobileApps(false)
            setInstitucional(true)
          }}
        >
          Institucional
        </S.PortfolioFilterItem>
        <S.PortfolioFilterItem
          className={!institucional & ecommerce && !mobileApps && "actived"}
          onClick={() => {
            setInstitucional(false)
            setMobileApps(false)
            setEcommerce(true)
          }}
        >
          E-Commerce
        </S.PortfolioFilterItem>
        <S.PortfolioFilterItem
          className={!institucional & !ecommerce && mobileApps && "actived"}
          onClick={() => {
            setInstitucional(false)
            setEcommerce(false)
            setMobileApps(true)
          }}
        >
          Aplicativos
        </S.PortfolioFilterItem>
      </S.PortfolioFilter>
      <S.PortfolioList>
        {sites.map((site, index) => {
          const siteInstitucional = site.type === "Institucional"
          const siteEcommerce = site.type === "E-Commerce"
          const mobile = site.type === 'Aplicativos'
          return (
            <>
              {((institucional && siteInstitucional) ||
                (ecommerce && siteEcommerce) || (mobileApps && mobile)) && (
                
                <S.PortfolioItems key={index}>
                  <S.PortfolioLink href={site.url} target="_blank" title={site.title}>
                    <S.PortfolioItemTitle>{site.title}</S.PortfolioItemTitle>
                    <S.PortfolioType>{site.type}</S.PortfolioType>
                    <S.ImagensWrapper
                      fluid={imgs[site.name].childImageSharp.fluid}
                    />

                  </S.PortfolioLink>
                  <S.PortfolioDescription>
                    {site.description.map(technology => (
                      <S.Technologies>{technology}</S.Technologies>
                    ))}
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

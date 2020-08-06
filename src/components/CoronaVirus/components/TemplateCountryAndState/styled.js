import styled from "styled-components"
import media from "styled-media-query"

export const TemplateWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  &.items-content {
    margin-bottom: 15px;
  }

  ${media.lessThan("991.98px")`
    flex-wrap: wrap;
  `}
`

export const TemplateItems = styled.section`
  flex-basis: 100%;
  
  &.half-item {
    flex-basis: 50%;

    ${media.lessThan("991.98px")`
      flex-basis: 100%;
    `}
  }
`

export const TemplateTitle = styled.h2`
  text-transform: uppercase;
  padding: 16px 12px 8px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  min-height: 46px;
  display: flex;
  align-items: center;
  line-height: 23px;
`

export const TemplateSituation = styled.section`
  border: 1px solid #585858;
  padding: 12px;
`

export const TemplateItem = styled.p`
  margin-bottom: 5px;
  line-height: 20px;
`

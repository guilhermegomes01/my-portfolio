import styled from "styled-components"
import media from "styled-media-query"

export const TemplateWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`

export const TemplateItems = styled.section`
  ${media.greaterThan("991.98px")`
        &:first-child {
            margin-right: 10px;
        }
    `}
`

export const TemplateTitle = styled.h2`
  text-transform: uppercase;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  min-height: 40px;
  display: flex;
  align-items: center;
`

export const TemplateSituation = styled.section`
  border: 1px solid #585858;
  padding: 12px;
`

export const TemplateItem = styled.p`
  margin-bottom: 5px;
`

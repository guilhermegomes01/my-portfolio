import React from "react"

import {
  TemplateWrapper,
  TemplateSituation,
  TemplateTitle,
  TemplateItems,
  TemplateItem,
} from "./styled"

const TemplateCountryAndState = ({
  isState,
  title,
  confirmed,
  deaths,
  suspects,
  refuses,
  datetime,
}) => (
  <TemplateItems>
    <TemplateTitle>{title}</TemplateTitle>
    <TemplateSituation>
      <TemplateWrapper className="items-content">
        <TemplateItems className="half-item">
          <TemplateItem>Confirmados: {confirmed}</TemplateItem>
          <TemplateItem>Óbitos: {deaths}</TemplateItem>
        </TemplateItems>
        <TemplateItems className="half-item">
          <TemplateItem>
          {isState ? "Suspeitos: " : "Recuperados: "} {suspects}
          </TemplateItem>
          <TemplateItem>
            {isState ? "Descartados: " : ""}
            {refuses}
          </TemplateItem>
        </TemplateItems>
      </TemplateWrapper>
      <TemplateItem />
      <TemplateItem>Última atualização: {datetime}</TemplateItem>
    </TemplateSituation>
  </TemplateItems>
)

export default TemplateCountryAndState

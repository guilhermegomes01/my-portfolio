import React from "react"

import {
  TemplateWrapper,
  TemplateSituation,
  TemplateTitle,
  TemplateItems,
  TemplateItem,
} from "./styled"
import FormatedNumber from '../FormatedNumber'

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
          <FormatedNumber title="Confirmados: " value={confirmed} />
          <FormatedNumber title="Óbitos: " value={deaths} />
        </TemplateItems>
        <TemplateItems className="half-item">
          <FormatedNumber title={isState ? "Suspeitos: " : "Recuperados: "} value={suspects} />
          <FormatedNumber title={isState ? "Descartados: " : ""} value={refuses} />
        </TemplateItems>
      </TemplateWrapper>
      <TemplateItem />
      <TemplateItem>Última atualização: {datetime}</TemplateItem>
    </TemplateSituation>
  </TemplateItems>
)

export default TemplateCountryAndState

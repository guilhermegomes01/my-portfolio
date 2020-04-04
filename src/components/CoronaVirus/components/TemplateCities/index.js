import React from "react"

import {
  TemplateSituation,
  TemplateTitle,
  TemplateItems,
  TemplateItem,
} from "./styled"

const TemplateCities = ({
  title,
  confirmed,
  deaths,
  datetime,
}) => (
  <TemplateItems>
    <TemplateTitle>{title}</TemplateTitle>
    <TemplateSituation>
      <TemplateItem>Confirmados: {confirmed}</TemplateItem>
      <TemplateItem>Óbitos: {deaths}</TemplateItem>
      <TemplateItem>Última atualização: {datetime}</TemplateItem>
    </TemplateSituation>
  </TemplateItems>
)

export default TemplateCities
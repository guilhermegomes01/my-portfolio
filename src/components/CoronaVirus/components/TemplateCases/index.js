import React from "react"

import {
  TemplateSituation,
  TemplateTitle,
  TemplateItems,
  TemplateItem,
} from "./styled"

const TemplateCases = ({
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
      <TemplateItem>Confirmados: {confirmed}</TemplateItem>
      <TemplateItem>Óbitos: {deaths}</TemplateItem>
      <TemplateItem>
        {isState ? "Suspeitos: " : "Recuperados: "} {suspects}
      </TemplateItem>
      <TemplateItem>
        {isState ? "Descartados: " : "Casos totais: "}
        {refuses}
      </TemplateItem>
      <TemplateItem />
      <TemplateItem>Última atualização: {datetime}</TemplateItem>
    </TemplateSituation>
  </TemplateItems>
)

export default TemplateCases

import React from "react"

// Icons
import Globe from "../../images/svg-icons/globe.svg"

// Internal Components
import PageTitle from "../PageTitle"

const Informations = () => (
  <>
    <PageTitle>
      <Globe />
      <h2>Informações Importantes</h2>
    </PageTitle>

    <button> {'<-'} Voltar</button>

    <section>
        <p>Informações sobre os dados do Covid19</p>
        <p>Fonte: Secretarias de Saúde Estaduais, Ministério da Saúde e Coronavírus Brasil</p>
        <p>Dados tratados por:</p>
        <ul>
            <li>Alvaro Justen - Brasil.io</li>
            <li>Arthur Ribeiro</li>
        </ul>

        <p>A coleta de dados é feita das Secretarias Estaduais, que divulgam o total de casos e mortes no estado e para cada município</p>
    </section>

    <section>

    </section>
    
  </>
)

export default Informations

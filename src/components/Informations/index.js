import React from "react"

// Icons
import Globe from "../../images/svg-icons/globe.svg"
import { ArrowLeft } from "@styled-icons/feather/ArrowLeft";

// Internal Components
import PageTitle from "../PageTitle"

// Styles
import { Section, Paragraph, List, ListItem, Button, Span } from "./styled";

const Informations = () => (
  <>
    <PageTitle>
      <Globe />
      <h2>Informações Importantes</h2>
    </PageTitle>

    <Button cover direction="left" bg="#242424" duration={0.6} to="/casos-covid19/">
      <ArrowLeft />
      <Span>Voltar</Span>
    </Button>

    <Section>
        <Paragraph className="source">
        Fonte: Secretarias de Saúde Estaduais, Ministério da Saúde e Coronavírus Brasil
        </Paragraph>
        <Paragraph className="titleList">
        Dados tratados por:
        
        </Paragraph>
        <List>
            <ListItem>Alvaro Justen - Brasil.io</ListItem>
            <ListItem>Arthur Ribeiro</ListItem>
        </List>

        <Paragraph>

        A coleta de dados é feita das Secretarias Estaduais, que divulgam o total de casos e mortes no estado e para cada município.
        </Paragraph>
        <Paragraph>
        Os casos por município de um estado pode divergir do total no estado, pois nem sempre as Secretarias divulgam todos os municípios em que aconteceram casos.
        </Paragraph>
    </Section>
    
  </>
)

export default Informations

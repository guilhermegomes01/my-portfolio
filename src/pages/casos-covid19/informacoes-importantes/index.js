import React from "react"

import Layout from "../../../components/Layout"
import SEO from "../../../components/seo"
import Header from "../../../components/Header"
import Informations from "../../../components/Informations"

const ImportantInformations = () => (
  <>
    <Header />
    <Layout isCovidSubPage>
      <SEO
        title="Casos Covid19"
        image="/assets/img/guilherme-icon.png"
        description="Informações sobre os casos de Covid19 no Brasil, nos seus estados e respectivas cidades."
      />
      <Informations />
    </Layout>
  </>
)

export default ImportantInformations
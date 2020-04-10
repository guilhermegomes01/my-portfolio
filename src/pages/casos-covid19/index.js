import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Header from "../../components/Header"
import CoronaVirus from "../../components/CoronaVirus"

const CasosCovid19 = () => {
  const title="Casos Covid19";
  const description = "Informações sobre os casos de Covid19 no Brasil, nos seus estados e respectivas cidades."
  
  return (
    <>
      <Header />
      <Layout isCovidPage>
        <SEO
          title={title}
          image="/assets/img/guilherme-icon.png"
          description={description}
        />
        <CoronaVirus title={title} description={description} />
      </Layout>
    </>
  )
}

export default CasosCovid19

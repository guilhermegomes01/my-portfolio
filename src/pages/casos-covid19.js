import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import CoronaVirus from '../components/CoronaVirus'

const CasosCovid19 = () => (
  <>
  <Header />
  <Layout>
    <SEO title="Casos Covid19" />
    <CoronaVirus />
  </Layout>
  </>
)

export default CasosCovid19
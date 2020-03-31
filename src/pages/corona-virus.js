import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import CoronaVirus from '../components/CoronaVirus'

const Covid19 = () => (
  <>
  <Header />
  <Layout>
    <SEO title="Corona Vírus" />
    <CoronaVirus />
  </Layout>
  </>
)

export default Covid19
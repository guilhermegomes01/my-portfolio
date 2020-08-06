import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import Certifications from '../components/Certifications'

const Certificacoes = () => (
  <>
  <Header />
  <Layout>
    <SEO title="Certificações" />
    <Certifications />
  </Layout>
  </>
)

export default Certificacoes
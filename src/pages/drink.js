import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import Drinks from '../components/Drinks'

const Drink = () => (
  <>
  <Header />
  <Layout>
    <SEO title="Drink" />
    <Drinks />
  </Layout>
  </>
)

export default Drink
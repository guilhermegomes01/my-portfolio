import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio"
import Header from "../components/Header"

const IndexPage = () => (
    <>
    <Header />
    <Layout>
      <SEO title="Home" />
      <Portfolio />
    </Layout>
    </>
)

export default IndexPage

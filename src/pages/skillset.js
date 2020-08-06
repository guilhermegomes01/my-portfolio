import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from '../components/Header'
import SkillsetItems from '../components/SkillsetItems'

const Skillset = () => (
  <>
  <Header />
  <Layout>
    <SEO title="Skillset" />
    <SkillsetItems />
  </Layout>
  </>
)

export default Skillset
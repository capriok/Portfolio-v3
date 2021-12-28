import React from "react"

import Layout from "../components/Layouts/HomeLayout"
import Contact from '../components/Sections/Contact'
import FeatureMap from '../components/Sections/FeatureMap'
import Introduction from '../components/Sections/Intro'
import ProjectMap from '../components/Sections/ProjectMap'
import Skills from '../components/Sections/Skills'
import SEO from '../components/Seo'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Kyle Caprio" />
      <Introduction />
      <Skills />
      <FeatureMap />
      <ProjectMap />
      <Contact />
    </Layout>
  )
}

export default IndexPage
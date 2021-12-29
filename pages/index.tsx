import React from "react"

import Layout from '@components/layouts/HomeLayout'
import Contact from '@components/sections/Contact'
import FeatureMap from '@components/sections/Feature-map'
import Introduction from '@components/sections/Intro'
import ProjectMap from '@components/sections/Project-map'
import Skills from '@components/sections/Skills'
import SEO from '@components/Seo'

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
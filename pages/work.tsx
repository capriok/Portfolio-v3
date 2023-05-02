import React from "react"

import Layout from "@components/layouts/HomeLayout"
import ProjectMap from "@components/sections/Project-map"
import SEO from "@components/Seo"

import styles from "@styles/components/work.module.scss"

const Work: React.FC = () => (
  <Layout>
    <SEO title="Projects" />
    <div className={styles.workRoute}>
      <ProjectMap />
    </div>
  </Layout>
)

export default Work

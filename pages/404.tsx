import React from "react"

import Layout from "../components/layouts/HomeLayout"
import SEO from "../components/Seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ paddingTop: '10vh', textAlign: 'center' }}>
      <h1>Page Not Found.</h1>
      <p>We seem to have gotten lost.</p>
    </div>
  </Layout >
)

export default NotFoundPage

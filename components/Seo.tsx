import React from "react"
import Head from "next/head"

const SEO: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Software Developer" />
    </Head>
  )
}

export default SEO

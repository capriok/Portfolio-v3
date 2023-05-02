import React from "react"
import Head from "next/head"

const SEO: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer"
      />
      <meta name="author" content="Kyle Caprio" />
      <meta name="description" content="Software Engineer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default SEO

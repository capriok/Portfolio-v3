import React from "react"

import Header from "@components/Header"

import styles from "@styles/components/layouts.module.scss"

const Layout: React.FC = ({ children }) => {
  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === "/"
  }

  return (
    <>
      <Header atHome={atHome} />
      <div className={styles.resumeLayout}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

import React from "react"

import styles from "@styles/components/sections/intro.module.scss"

const Introduction: React.FC = () => (
  <div className={styles.introSection}>
    <div className={styles.cont}>
      <h1 className={styles.title}>Kyle Caprio.</h1>
      <h1 className={styles.subTitle}>Software Engineer.</h1>
      <p className={styles.snippet}>A function a day keeps the doctor away.</p>
      <p className={styles.snippet}>Based in Arizona.</p>
    </div>
  </div>
)

export default Introduction

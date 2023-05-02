import React from "react"
import featuresData from "@json/features.json"

import FeaturedCard from "@components/Feature-card"

import styles from "@styles/components/sections/feature-map.module.scss"

const FeatureMap: React.FC = () => {
  let features: Array<Feature> = featuresData

  return (
    <div className={styles.featureMapSection}>
      <h1 className={styles.sectionTitle}>Featured</h1>
      {features.map((project, i: number) => (
        <FeaturedCard key={i} project={project} index={i} />
      ))}
    </div>
  )
}

export default FeatureMap

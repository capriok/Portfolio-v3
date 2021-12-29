import React from 'react'
import featuresData from '../../shared/jsons/features.json'

import FeaturedCard from '../Feature-card'

import styles from '../../shared/styles/Components/sections/feature-map.module.scss'

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

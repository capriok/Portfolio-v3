import React from 'react'
import featuresData from '../../public/features.json'

import FeaturedCard from '../FeatureCard'

import styles from '../../styles/Components/sections/FeatureMap.module.scss'

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

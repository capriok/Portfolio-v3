import React, { useState } from "react"
import featuresJson from "@json/features.json"
import projectsJson from "@json/projects.json"

import { MdExpandMore, MdExpandLess } from "react-icons/md"
import ProjectCard from "@components/Project-card"

import styles from "@styles/components/sections/project-map.module.scss"

const ProjectMap: React.FC = () => {
  const [pg, setPg] = useState<number>(6)

  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === "/"
  }

  const slugs = featuresJson.map((f) => f.slug)
  const projects = [...projectsJson].filter((p) => {
    if (!atHome) return p
    if (slugs.some((s) => s === p.slug)) return
    return p
  })

  return (
    <div className={styles.projectMapSection}>
      <h1 className={styles.sectionTitle}>Project Collection</h1>
      <div className={styles.cardCont}>
        {projects.slice(0, atHome ? pg : projects.length).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {atHome && (
        <div className={styles.buttonCont}>
          {pg > 6 && (
            <button onClick={() => setPg(pg - 3)}>
              <MdExpandLess />
            </button>
          )}
          {pg <= projects.length && (
            <button onClick={() => setPg(pg + 3)}>
              <MdExpandMore />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectMap

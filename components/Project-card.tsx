import React from "react"
import Link from "next/link"

import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

import styles from "@styles/components/project-card.module.scss"

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <Link passHref href={`/${project.slug}`}>
          <a>
            <h3 className={styles.cardTitle}>{project.title}</h3>
          </a>
        </Link>
        <div className={styles.folderClosed}>
          <AiOutlineFolder />
        </div>
        <div className={styles.folderOpen}>
          <AiOutlineFolderOpen />
        </div>
      </div>
      <div className={styles.description}>
        <p>{project.description}</p>
      </div>
      <div className={styles.foot}>
        <Link passHref href={`${project.source}`}>
          <a target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </Link>
        <Link passHref href={`${project.demo}`}>
          <a target="_blank" rel="noreferrer">
            <RiExternalLinkFill />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

import React, { useState } from "react";
import Link from "next/link";

import FullView from "./Full-view";
import Carousel from "./Carousel";

import { AiFillGithub, AiOutlineHome } from "react-icons/ai";
import { RiExternalLinkFill } from "react-icons/ri";

import styles from "@styles/components/project-view.module.scss";

interface Props {
  project: Project;
}

const ProjectView: React.FC<Props> = ({ project }) => {
  const [viewState, setView] = useState<ViewState>({ open: false, image: 0 });

  return (
    <div className={styles.projectView}>
      <h1 className={styles.sectionTitle}>{project.title}</h1>
      <div>
        <FullView images={project.images} view={viewState} set={setView} />
        <Carousel images={project.images} set={setView} />
      </div>
      <p className={styles.description}>{project.description}</p>
      <hr />
      {project.writing.process && (
        <>
          <h2>The Process</h2>
          <p className={styles.process}>{project.writing.process}</p>
          <p className={styles.process}>{project.writing.processSub}</p>
        </>
      )}
      {project.writing.conclusion.length > 0 && (
        <>
          <h2>Take Aways</h2>
          <ul>
            {project.writing.conclusion.map((conclusion, i) => (
              <li key={i}>{conclusion}</li>
            ))}
          </ul>
        </>
      )}
      <h2>Technology stack</h2>
      <ul>
        {project.stack.map((stack, i) => (
          <li key={i}>{stack}</li>
        ))}
      </ul>
      {project.resources.length > 0 && (
        <>
          <h2>Resources</h2>
          <ul>
            {project.resources.map((resource, i) => (
              <li key={i}>
                <a href={resource} target="_blank" rel="noreferrer">
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <h2>Links</h2>
      <div className={styles.links}>
        <Link passHref href="/">
          <a className={styles.link}>
            <p>
              <AiOutlineHome />
            </p>
            <p>Home</p>
          </a>
        </Link>
        <Link passHref href={project.source}>
          <a className={styles.link} target="_blank" rel="noreferrer">
            <p>
              <AiFillGithub />
            </p>
            <p>Github</p>
          </a>
        </Link>
        <Link passHref href={project.demo}>
          <a className={styles.link} target="_blank" rel="noreferrer">
            <p>
              <RiExternalLinkFill />
            </p>
            <p>Demo</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectView;

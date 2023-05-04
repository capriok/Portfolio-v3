import React, { useState } from "react"

import styles from "@styles/components/sections/skills.module.scss"

import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTrpc,
  SiPrisma,
  SiSocketdotio,
  SiMysql,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGithub,
  SiNetlify,
  SiNpm,
  SiVercel,
} from "react-icons/si"
import { DiSass, DiPostgresql } from "react-icons/di"
import { RiHtml5Line, RiCss3Fill } from "react-icons/ri"
import { VscDatabase } from "react-icons/vsc"
import { FaJava } from "react-icons/fa"

const Skills: React.FC = () => {
  const [tab, setTab] = useState<object>({ b: true })

  const Tab = ({ children, t }) => (
    <li
      className={tab[t] ? styles.activeTab : ""}
      onClick={() => !Object.keys(tab).includes(t) && setTab({ [t]: true })}
    >
      {children}
    </li>
  )

  const Skill = ({ Icon, name }) => (
    <li>
      <p>
        <Icon />
      </p>
      <p>{name}</p>
    </li>
  )

  const Icons = ({ children, t }) => (
    <>
      {tab[t] && (
        <section>
          <ul>{children}</ul>
        </section>
      )}
    </>
  )

  return (
    <div className={styles.skillsSection}>
      <h1 className={styles.sectionTitle}>Technology</h1>
      <div className={styles.skillsCont}>
        <ul className={styles.tabs}>
          <Tab t="a">
            <span>Programming </span>
            <span>Languages</span>
          </Tab>
          <Tab t="b">
            <span>Front-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="c">
            <span>Back-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="d">
            <span>Database </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="e">
            <span>Storage and</span>
            <span>Deployment</span>
          </Tab>
        </ul>
        <Icons t="a">
          <Skill Icon={SiJavascript} name="JavaScript" />
          <Skill Icon={SiTypescript} name="TypeScript" />
          <Skill Icon={SiCsharp} name="C Sharp" />
          <Skill Icon={SiPython} name="Python" />
          <Skill Icon={FaJava} name="Java" />
        </Icons>
        <Icons t="b">
          <Skill Icon={SiReact} name="React" />
          <Skill Icon={SiNextdotjs} name="Next" />
          <Skill Icon={RiHtml5Line} name="HTML" />
          <Skill Icon={RiCss3Fill} name="CSS" />
          <Skill Icon={DiSass} name="SASS" />
        </Icons>

        <Icons t="c">
          <Skill Icon={SiNodedotjs} name="Express.js" />
          <Skill Icon={SiGraphql} name="GraphQL" />
          <Skill Icon={SiTrpc} name="TRPC" />
          <Skill Icon={SiPrisma} name="Prisma" />
          <Skill Icon={SiSocketdotio} name="Socket.io" />
        </Icons>
        <Icons t="d">
          <Skill Icon={DiPostgresql} name="PostgreSQL" />
          <Skill Icon={SiMysql} name="MySQL" />
          <Skill Icon={SiMicrosoftsqlserver} name="SQL Server" />
          <Skill Icon={SiMongodb} name="Mongo DB" />
          <Skill Icon={VscDatabase} name="NoSQL" />
        </Icons>
        <Icons t="e">
          <Skill Icon={SiAmazonaws} name="AWS" />
          <Skill Icon={SiMicrosoftazure} name="Azure" />
          <Skill Icon={SiVercel} name="Vercel" />
          <Skill Icon={SiNetlify} name="Netlify" />
          <Skill Icon={SiGithub} name="Github" />
          <Skill Icon={SiNpm} name="NPM" />
        </Icons>
      </div>
    </div>
  )
}

export default Skills

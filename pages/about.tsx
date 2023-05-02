import React from "react"

import Layout from "@components/layouts/HomeLayout"
import Contact from "@components/sections/Contact"
import SEO from "@components/Seo"

import styles from "@styles/components/about.module.scss"

import experience from "../public/json/experience.json"

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className={styles.aboutRoute}>
      <h1 className={styles.sectionTitle}>About me</h1>
      <div className={styles.aboutCont}>
        <h2>Background</h2>
        <p className={styles.info}>
          My name is Kyle. Im a self taught software engineer based in Arizona. I found my passion
          for learning computer sciences at the age of 16 and have been programming ever since.
          Being able to effectively teach myself is something I am most proud of about myself. In
          2019, I decided to reinvent my career path and pursue a degree in web programming. Ive
          dedicated countless hours to learning and expanding this passion. I have developed an avid
          work ethic and disciplinary skills along my journey in life. Strong creative and critical
          thinking skills have helped me to excel in areas like web development as well as
          functional and object oriented programming. In free my time, I immerse myself in learning
          new programming technologies and how to better myself as a programmer but also find joy
          with meditation, music, hiking, and spending time under the sun.
        </p>
        <h2>Experience</h2>
        <ul>
          {experience.map((exp) => (
            <li key={exp.occupation + exp.company}>
              <p className={styles.experienceTimeframe}>{exp.timeFrame}</p>
              <p className={styles.experienceOccupation}>
                {exp.occupation} - {exp.company}
              </p>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          <li>
            <p className={styles.experienceTimeframe}>Graduated Feb 2022</p>
            <p>
              <b>Rasmussen University</b> - Deans List, 3.97 GPA
            </p>
            <p>Associate of Science Degree, Web Programming</p>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  </Layout>
)

export default About

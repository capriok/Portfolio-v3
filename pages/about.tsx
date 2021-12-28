import React from 'react'

import Layout from '../components/Layouts/HomeLayout'
import Contact from '../components/Sections/Contact'
import SEO from '../components/Seo'

import styles from '../styles/Components/About.module.scss'

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className={styles.aboutRoute}>
      <h1 className={styles.sectionTitle}>About me</h1>
      <div className={styles.aboutCont}>
        <h2>Background</h2>
        <p className={styles.info}>
          My name is Kyle. Im a self taught software developer based in Arizona.
          I found my passion for learning computer sciences at the age of 16 and have been programming ever since.
          Being able to effectively teach myself is something I am most proud of about myself.
          In 2019, I decided to reinvent my career path and pursue a degree in web programming.
          Ive dedicated countless hours to learning and expanding this passion.
          I have developed an avid work ethic and disciplinary skills along my journey in life.
          Strong creative and critical thinking skills have helped me to excel in areas
          like web development as well as functional and object oriented programming.
          In free my time, I immerse myself in learning new programming technologies and how to better myself as a programmer
          but also find joy with meditaion, music, hiking, and spending time under the sun.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Associate of Science Degree, Web Programming</p>
            <p>Deans List, 3.97 GPA</p>
          </li>
        </ul>
        <h2 >Experience</h2>
        <ul>
          <li>
            <p>2+ years</p>
            <p>Distributing web graphics and designs to personally attained clients</p>
            <p>Designing, building and maintaining client web applications</p>
          </li>
          <li>
            <p>3+ years</p>
            <p>Building personal projects to learn and practice new technologies</p>
          </li>
          <li>
            <p>10+ years</p>
            <p>Building and creating web content for others to enjoy</p>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  </Layout>
)

export default About

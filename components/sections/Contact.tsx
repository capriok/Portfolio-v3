import React from "react"
import { HiOutlineMail } from "react-icons/hi"
import { SiGithub, SiLinkedin } from "react-icons/si"

import styles from "@styles/components/sections/contact.module.scss"

const Contact: React.FC = () => (
  <div className={styles.contactSection}>
    <div className={styles.contentCont}>
      <h1 className={styles.sectionTitle}>Feel free to reach out.</h1>
      <p>Direct Email</p>
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <HiOutlineMail />
        </button>
      </a>
    </div>
    <div className={styles.contentCont}>
      <p>Other Platforms</p>
      <div className={styles.buttonCont}>
        <a href="https://github.com/capriok" target="_blank" rel="noreferrer">
          <button>
            <SiGithub />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/kyle-caprio" target="_blank" rel="noreferrer">
          <button>
            <SiLinkedin />
          </button>
        </a>
      </div>
    </div>
  </div>
)

export default Contact

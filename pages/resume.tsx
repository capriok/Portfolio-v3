import SEO from "@components/Seo";
import React from "react";
import Layout from "../components/layouts/ResumeLayout";

import styles from "../styles/components/resume.module.scss";

const PrimaryPDF = process.env.NEXT_PUBLIC_RESUME_DIRECT;

const Resume: React.FC = () => (
  <>
    <SEO title="Resume" />
    <Layout>
      <div className={styles.resume}>
        <object
          data={PrimaryPDF}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          Resume
        </object>
      </div>
      <div className={styles.resumeMobile}>
        <button
          className={styles.resumeBtn}
          onClick={() => window.open(PrimaryPDF)}
        >
          View Resume
        </button>
      </div>
    </Layout>
  </>
);

export default Resume;

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1> projects</h1>
    <p>i do a lot of things, so i figured i would put them all here</p>
    <h3> publications: </h3>
    <a href='https://medium.com/informal-musings/a-quick-primer-on-some-common-cybersecurity-frameworks-29e2eb5b8fdc'> A quick primer on some common cybersecurity frameworks</a>
    <p>a blog post i wrote while working on my masters project</p>
    <a href=''> A quick primer on some common cybersecurity frameworks</a>
    <p>my masters project </p>

    <h3> talks: </h3>
    <a href="https://www.youtube.com/watch?v=Y7H4JNTp4DM&t=6s">Disappearing Act: Can You Avoid Public Surveillance Cameras?</a>
    <p>2020 - my first ever conference talk held online and adjusted quite a bit due to the pandemic from the original talk</p>
    <a href="https://www.youtube.com/watch?v=8qvP5uDB2wc">Grow Up! Evaluating and Maturing Your SOC Using MITRE ATT&CK </a>
    <p>2023 - in person talk given to a large audience on one of my passion subjects </p>
  </Layout>
)

export default SecondPage
import React from "react"

import Layout from "../components/layout"
import headshot from "../images/HeadShot.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="aboutMe">
      <img src={headshot} draggable="false" id="headshot" alt="Matthew Frucht"/>
      <p className="mainP" style={{lineHeight:`1.6`}}>
        Hi! My name is Matthew Frucht. I'm a junior at Cornell University studying
        Information Science. Last summer, I worked as a research assistant in Dr. Susan Fussell's
        Communication and Collaborative Technologies Lab here at Cornell.
        <br/>
        <br/>
        When I'm not working, I love listening to and playing music, being outdoors, and watching hockey.
      </p>
    </div>
    <div id="projects">
      
    </div>
  </Layout>
)

export default IndexPage

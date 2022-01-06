import React from "react"

import Layout from "../components/layout"
import headshot from "../images/HeadShot.jpg"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="aboutMe">
      <img src={headshot} draggable="false" id="headshot" alt="Matthew Frucht"/>
      <p className="mainP" style={{lineHeight:`1.6`}}>
        Hi! My name is Matthew Frucht. I'm a Software Engineer at Microsoft. I am incredibly interested in the sociological and psychological
        effects of technology, especially how social technologies shape community building. I am in the process of redoing this website! 
        <br/>
        <br/>
        When I'm not working, I enjoy:
        <ul>
          <li class="interestList">Reading</li>
          <li class="interestList">Hiking</li>
          <li class="interestList">Listening to and playing music</li>
          <li class="interestList">Soccer</li>
        </ul>
      </p>
    </div>
  </Layout>
)

export default IndexPage

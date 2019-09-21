import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import pdf from '../content/resume.pdf';

// function onResumeClick() {
//   window.open(pdf);
// }

// function onLinkClick(link) {
//   window.open(link);
// }

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )
const Line = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5,
          maxWidth: 700,
          margin: 'auto',
      }}
  />
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ marginBottom: `0.75rem`, textAlign: "center", fontSize: 60 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Matthew Frucht
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, marginBottom: '1rem' }}>
          <li><a rel="noopener noreferrer" style={{marginRight: `1rem`}} href={pdf} target="_blank">Resume</a></li>
          <li><a rel="noopener noreferrer" style={{marginRight: `1rem`}} href="https://www.linkedin.com/in/matthewfrucht/" target="_blank">LinkedIn</a></li>
          <li><a rel="noopener noreferrer" style={{marginRight: `1rem`}} href="https://github.com/matthewfrucht" target="_blank">GitHub</a></li>
      </ul>
      <Line color="	#D0D0D0" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

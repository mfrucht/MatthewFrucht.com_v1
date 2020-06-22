import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"


  
  // $.get(spreadsheetURL, function (data) {
  //   data = data.feed.entry;

  //   data.forEach(row => {

  //     let table = $('table');

  //     let notes = linkify(row.gsx$notes.$t);


  //     let row_info = "<tr>";
  //     row_info += "<td>" + row.gsx$title.$t + "</td>";
  //     row_info += "<td>" + row.gsx$author.$t + "</td>";
  //     row_info += "<td>" + row.gsx$yearread.$t + "</td>";
  //     row_info += "<td>" + notes + "</td>";
  //     row_info += "<td>" + row.gsx$tags.$t + "</td>";

  //     row_info += "</tr>";
  //     table.append(row_info);

  //   });
  // });

const BooksPage = ({data}) => (
  <Layout>
    <SEO title="Books" />
    <Link style={{marginLeft:0}} to="/index/" >Back to Home</Link>
    <p>
    <br/>
      This is a little spreadsheet of the books that I've read since starting this
      page in Spring 2020.
    </p>

            
    <article>
    {data.allGoogleSheetDataRow.edges.map(obj => (
      <div>
        <h1>`${obj.node.title}, ${obj.node.author}`</h1>
        <p>`#${obj.node.notes}, ${obj.node.yearRead}`</p>
      </div>
    ))}
  </article>


  </Layout>
)

export const query = graphql`
  swapi {
    allSpecies {
      name
    }
  }
`

export default BooksPage

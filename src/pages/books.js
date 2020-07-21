import React, { useState, useEffect, Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { Link } from "gatsby"


class BooksPage extends React.Component {

  state = {
    loading: true,
    error: false,
    bookData: [],
  }

  componentDidMount() {
     
    fetch('https://spreadsheets.google.com/feeds/list/1jnx-EtvvW5ex7ZyZQ2RwMChqX7-lvpEHQl3lMZGW5qI/od6/public/values?alt=json')
        .then(response => {return response.json()})
        .then((data) => {
            this.setState ({
              loading: false,
              bookData:
                data.feed.entry.map((x) => ({
                  title: x.gsx$title.$t,
                  author: x.gsx$author.$t,
                  yearRead: x.gsx$yearread.$t,
                  notes: x.gsx$notes.$t
                } ))
            })
         })
  }
  
  render() {
    // const{ data } = this.props
    const { loading, bookData } = this.state
    
    return( 
    <Layout>
      <SEO title="Books" />
      <Link style={{marginLeft:0}} to="/" >Back to Home</Link>
      <p>
      <br/>
        This is a little spreadsheet of the books that I've read since starting this
        page in Spring 2020.
        <br/>
        As if my to-read list isn't long enough already, I'll take book recommendations
        sent to <a href="mailto:msf239@cornell.edu">msf239@cornell.edu</a>!
      </p>
     {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table data={bookData}></Table>
      )}
      </Layout>

    ) 
  }
}

export default BooksPage



import React, { useState, useEffect, Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bookTable from "../components/book-table"
import { Link } from "gatsby"

// getBooks {
//   fetch("https://spreadsheets.google.com/feeds/list/1jnx-EtvvW5ex7ZyZQ2RwMChqX7-lvpEHQl3lMZGW5qI/od6/public/values?alt=json")
//       // headers: {
//       //   'content-type': 'applications/json',
//       // },
//       // body: JSON.stringify(data),
//       // })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
// }

// createTable() {
//   fetch("https://spreadsheets.google.com/feeds/list/1jnx-EtvvW5ex7ZyZQ2RwMChqX7-lvpEHQl3lMZGW5qI/od6/public/values?alt=json", {
//     headers: {
//       'content-type': 'applications/json',
//     },
//     body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
// }

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
          // console.log(data)
            this.setState ({
              loading: false,
              bookData: 
                data.feed.entry.map((x) => ({
                  title: x.gsx$title,
                  author: x.gsx$author,
                  yearRead: x.gsx$yearRead,
                  notes: x.gsx$notes
                }))
            })
         })
  }
  
  render() {
    const{ data } = this.props
    const { loading, bookData } = this.state
    
    return( 
    <Layout>
      <SEO title="Books" />
      <Link style={{marginLeft:0}} to="/" >Back to Home</Link>
      <p>
      <br/>
        This is a little spreadsheet of the books that I've read since starting this
        page in Spring 2020.
      </p>
     {loading ? (
        <p>Loading ...</p>
      ) : (
        bookData.map( book => (
          <p key={book.title}>{book.title}</p>
        ))
      )}
      </Layout>

    ) 
  }
}

export default BooksPage



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
      <p className="booksP">
        Hi there! I started this page in Spring 2020 to log my reading (and 
        to learn how to load data from a Google Sheets spreadsheet). It was a fun
        little experiment, but I'm going to stop updating this page. I'm doing this
        for the same reason that I'm going to stop using Goodreads; I don't 
        particularly like publishing the books that I'm reading, as it creates this
        sort of "reading for an audience" mindset that I don't like. Every time
        I'd pick up a title, I would subconsciously thing <i>what are people going to think of
        me reading this book?</i> 

        <br/>
        <br/>
        
        To me, that's a terrible mindset to have, as reading
        is something I do solely for my own pleasure. I also found that publishing
        my reading list dissuaded me from abandoning books; I didn't want my reading
        list to show "not completed" or to have to remove books from the list.
        But I see nothing wrong with abandoning books! books are not contracts, and I 
        shouldn't have to waste my time finishing a book I dislike simply to check
        it off as completed. Perhaps that's not the most virtuous view of, but as
        I said, I read only for my own enjoyment.
        <br/>
        <br/>
        I'm still leaving this page up. So here are the books that I either read
        or started reading from April 2020 through January 2021:
        <br/>
        <br/>
        </p>
        
     {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table data={bookData}></Table>
      )}

      <p>
        I also read <i>The New York Times</i> most days and 
        <i>The New Yorker</i> every week.
      </p>
      </Layout>

    ) 
  }
}

export default BooksPage



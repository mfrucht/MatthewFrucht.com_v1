import React, { Component } from "react"


class BookTable extends React.Component {
    
  state = {
    loading: true,
    error: false,
    bookData: [],
  }

  componentDidMount() {
     
    fetch('https://spreadsheets.google.com/feeds/list/1jnx-EtvvW5ex7ZyZQ2RwMChqX7-lvpEHQl3lMZGW5qI/od6/public/values?alt=json')
        .then(response => {return response.json()})
        .then(json => {
            this.setState ({
               bookData: json.results,
               loading: false
            })
         })
  }
  
   render() {
      const { loading, bookData } = this.state

      return (
       loading ? (
            <p>Loading</p>
         ) : (
            bookData.map(book => <p key={book.title} >{book.title}</p>)
         )
         
      )
   }
}
  
export default BookTable
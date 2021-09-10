import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []

  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })

  }

  updatebook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    console.log(this.state.books)

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BooksList
            updatebook={this.updatebook}
            books={this.state.books}

          />
        )} />
        <div className="open-search">
        
        <Route path='/search' render={() => (
              <Search 
                books={this.state.books}
                updatebook={this.updatebook}
              />
          )}/>
        
        </div>
      </div>
    )
  }
}

export default BooksApp
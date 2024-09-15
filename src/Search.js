import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        searchedbooks: []
    }
    onSearch = (query) => {
        query === ""?
        ( this.setState(() => ({
            searchedbooks: []
        }))) : (
        BooksAPI.search(query).then((books) => {
            books.error?
            this.setState(() => ({
                searchedbooks: []
            })) :
            this.setState(() => ({
                searchedbooks: books
            }))
        })
        )
        
    }
    checkBookOnShelf=(id) => {
        let foundBook = this.props.books.filter((book) => {
            return book.id === id
        })
        if(foundBook.length > 0){
            return foundBook[0].shelf
        }
        else {
            return 'none'
        }
    }

    render() {
        const { books, updatebook } = this.props
        const { searchedbooks } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/" className="close-search">Back to My Shelves
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.onSearch(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {searchedbooks.map((searchedbook, index) => (
                        <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${searchedbook.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }} />
                                    <div className="book-shelf-changer">
                                        <select value={this.checkBookOnShelf(searchedbook.id)} onChange={(event) => updatebook(searchedbook, event.target.value)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading </option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{searchedbook.title}</div>
                                <div className="book-authors">{searchedbook.author}</div>
                            </div>
                        </li>

                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search
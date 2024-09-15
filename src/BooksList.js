import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './BooksList.css'



class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updatebook: PropTypes.func.isRequired
    }
    filterbookbyshelf = (books,shelf) => {
        return (
            books.filter( (book) => (book.shelf) === shelf )
        )
    }
    render() {
        const { books,updatebook } = this.props
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <div className='book'>
                                    {this.filterbookbyshelf(books,"currentlyReading").map((book) => (
                                        <li key={book.id} className='book-list-item'>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }} />
                                                    <div className="book-shelf-changer">
                                                        <select value={`${book.shelf}`} onChange={(event) => updatebook(book,event.target.value) }>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading </option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.author}</div>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <div className='book'>
                                    {this.filterbookbyshelf(books,"wantToRead").map((book) => (
                                        <li key={book.id} className='book-list-item'>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }} />
                                                    <div className="book-shelf-changer">
                                                        <select value={`${book.shelf}`} onChange={(event) => updatebook(book,event.target.value) }>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.author}</div>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <div className='book'>
                                    {this.filterbookbyshelf(books,"read").map((book) => (
                                        <li key={book.id} className='book-list-item'>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }} />
                                                    <div className="book-shelf-changer">
                                                        <select value={`${book.shelf}`} onChange={(event) => updatebook(book,event.target.value) }>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.author}</div>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'className='search'>
                    <button type="button">
                    console.log("Clicked!")
                    </button>              
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default BooksList
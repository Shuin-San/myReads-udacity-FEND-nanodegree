import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import { Link } from 'react-router-dom'
import Book from '../Book';


class searchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            yourQuery: [],
            query: ''
        }
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((resp) => {
            this.setState({ books: resp })
        })
    }

    getQueryUpdate = (query) => {
        this.setState({query: query}, this.submitBookQuery)
    }

    submitBookQuery = () => {
        let currentQuery = this.state.query
        if(currentQuery === '' || currentQuery === undefined) {
            return this.setState({ yourQuery: [] })
        }
        BooksAPI.search(currentQuery.trim())
        .then(resp => {
            if(resp.error) {
                return this.setState({ yourQuery: [] })
            }
            else {
                resp.forEach(foundBook => {
                    let matchedBooks = this.state.books.filter(
                        shelvedBook => shelvedBook.id === foundBook.id )
                        foundBook.shelf = matchedBooks[0] ? matchedBooks[0].shelf : undefined
                })
                return this.setState({ yourQuery: resp })
            }
        })
    }

    getBookUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(resp => {
            book.shelf = shelf
            this.setState(state => ({
                books: state.books.filter(newBook => newBook.id !== book.id).concat([book])
            }))
        })
    }

    render() {

        const { query, yourQuery } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={ query }

                            onChange={(event) => this.getQueryUpdate(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            yourQuery.map((book, key) =>
                                <Book
                                    getBookUpdate={this.getBookUpdate}
                                    key={key}
                                    book={book}
                                />
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default searchPage
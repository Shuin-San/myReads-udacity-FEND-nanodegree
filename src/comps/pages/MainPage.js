import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import Shelf from '../Shelf'
import { Link } from 'react-router-dom'

class MainPage extends Component {

    // initialize state following instructions from https://daveceddia.com/where-initialize-state-react/
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    //call the API
    componentDidMount() {
        BooksAPI.getAll()
        .then((resp) => {
            this.setState({ books: resp })
            console.log(this.state);
        })
    }

    //manage book shelf updates
    getBookUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(resp => {
            book.shelf = shelf
            this.setState(state => ({
                books: state.books.filter(theBook => theBook.id !== book.id).concat([book])
            }))
        })
    }

    render() {
        //ES6 destructuring the state
        const { books } = this.state

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <div>
                        <Shelf
                            getBookUpdate={this.getBookUpdate}
                            shelfName='Currently Reading'
                            shelfBooks={books.filter((book) => book.shelf === 'currentlyReading'
                            ) }
                        />
                        <Shelf
                            getBookUpdate={this.getBookUpdate}
                            shelfName='Want to Read'
                            shelfBooks={books.filter((book) => book.shelf === 'wantToRead'
                            ) }
                        />
                        <Shelf
                            getBookUpdate={this.getBookUpdate}
                            shelfName='Read'
                            shelfBooks={books.filter((book) => book.shelf === 'read'
                            ) }
                        />
                    </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Search for a Book</Link>
                </div>
            </div>
            
        )
    }
}

export default MainPage
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

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        will render shelfs here like this
                        <Shelf></Shelf>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Search a Book</Link>
                </div>
            </div>
            
        )
    }
}

export default MainPage
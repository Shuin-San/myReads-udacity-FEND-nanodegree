import React from 'react'

function Book(props) {

    //save book info in variables
    const { book, getBookUpdate } = props
    const authors = book.authors && book.authors.join(', ');
    let bookCover = (book.imageLinks && `url(${book.imageLinks.thumbnail})`)
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: bookCover
                        }}
                    >
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            value={ book.shelf || "none"}
                            onChange={(event) => { getBookUpdate(book, event.target.value) }}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}


export default Book
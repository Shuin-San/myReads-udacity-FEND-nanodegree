import React from 'react'
import Book from './Book'

function Shelf(props) {
    const {shelfBooks, shelfName} = props;
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">                    
                <ol className="books-grid">
                    {shelfBooks.map((book, key) =>
                        <Book
                            book={book}
                            key={key}
                            getBookUpdate={props.getBookUpdate}
                    />)}
                </ol>
            </div>
        </div>
    )
}

export default Shelf
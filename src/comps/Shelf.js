import React from 'react'
import Book from './Book'

function Shelf() {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">The Shelf name</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    
                        list of books 
                    
                </ol>
            </div>
        </div>
    )
}

export default Shelf
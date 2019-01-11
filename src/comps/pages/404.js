import React from 'react'
import { Link } from 'react-router-dom'

function FourOFour(props) {

    return (
        <div className="page-container">
            <h1 className="title">Uh Oh !!!</h1>
            <h3 className="image-credit">Page Not Found ! --- You Broke the Internet !!! Click <Link to='/'>Here</Link> to go to the main page !</h3>
        </div>
    )
}


export default FourOFour
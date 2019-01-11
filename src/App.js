import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './comps/pages/MainPage'
import SearchPage from './comps/pages/SearchPage'
import { Route, Switch } from 'react-router-dom'
import FourOFour from './comps/pages/404';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/search' component={SearchPage}/>
          <Route component={FourOFour}/>
        </Switch>
      </div>
    );
  }
}

export default BooksApp

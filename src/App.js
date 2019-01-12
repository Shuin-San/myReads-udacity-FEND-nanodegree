import React from 'react'
import './App.css'
import MainPage from './comps/pages/MainPage'
import SearchPage from './comps/pages/SearchPage'
import { Route, Switch } from 'react-router-dom'
import FourOFour from './comps/pages/404';



class BooksApp extends React.Component {
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

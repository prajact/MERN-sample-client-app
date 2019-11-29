import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MoviesList} />
                <Route path="/create" exact component={MoviesInsert} />
                <Route
                    path="/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
import Home from './components/Home'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import ProductionContainer from './containers/ProductionContainer'
import ProductionForm from './components/ProductionForm'
import Production from './containers/Production'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchProductions } from './actions'
import React, { useEffect } from 'react'


function App(props) {

  return <div className="App">
      <Router>
        <div className="navbar horizontal margin-bottom">

      <NavLink to="/"><h2>Home</h2></NavLink>

      <NavLink to="/productions"><h2>Productions</h2></NavLink>
      <NavLink to="/productions/new"><h2>Add Production</h2></NavLink>
        </div>
      <Switch>
        <Route exact path="/productions" component={ ProductionContainer }/>
        <Route exact path="/productions/new" component={ProductionForm }/>
        {/* <Route
            exact
            path="/"
            render={() => (
              <>
                <ProductionForm />
                <ProductionContainer />
                </>
            )}/> */}
        <Route exact path="/" component = {Home}/>
        <Route path="/productions/:id" component = {Production}/>

      </Switch>
      </Router>
      {/* <Box/> */}

    </div>
}

export default connect(null, { fetchProductions })(App);

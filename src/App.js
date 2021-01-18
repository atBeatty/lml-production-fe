import Home from './components/Home'
import {NavLink} from 'react-router-dom'
import ProductionContainer from './containers/ProductionContainer'
import ProductionForm from './components/ProductionForm'
import Production from './containers/Production'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Box from './containers/Box'


function App() {
  // console.log(this.props)
  return <div className="App">
      <Router>
      <NavLink to="/"><h2>Home</h2></NavLink>
      <NavLink to="/productions"><h2>Productions</h2></NavLink>
      <NavLink to="/productions/new"><h2>Add Production</h2></NavLink>
      <Switch>
        <Route exact path="/productions" component={ProductionContainer}/>
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
        <Route path="/productions/:id" component = {Production}/>
        <Route exact path="/" component = {Home}/>

      </Switch>
      </Router>
      {/* <Box/> */}

    </div>
}

export default App;

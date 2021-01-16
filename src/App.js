import Home from './components/Home'
import ProductionContainer from './containers/ProductionContainer'
import ProductionForm from './components/ProductionForm'
import ProductionCard from './components/ProductionCard'
import Production from './containers/Production'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  // console.log(this.props)
  return <div className="App">
      <Router>
      <Link to="/"><h2>Home</h2></Link>
      <Link to="/productions"><h2>Productions</h2></Link>
      <Link to="/productions/new"><h2>Add Production</h2></Link>
      <Switch>
        <Route exact path="/productions" component = {ProductionContainer}/>
        <Route exact path="/productions/new" component = {ProductionForm}/>
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
      

    </div>
}

export default App;

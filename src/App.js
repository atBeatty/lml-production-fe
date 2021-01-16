import Home from './components/Home'
import ProductionContainer from './containers/ProductionContainer'
import ProductionForm from './components/ProductionForm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  // console.log(this.props)
  return (

    <div className="App">
      <Router>
      <Link to="/productions"><h2>Home</h2></Link>
      <Link to="/productions/new"><h2>Add Production</h2></Link>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/productions" component = {ProductionContainer}/>
        <Route exact path="/productions/new" component = {ProductionForm}/>

      </Switch>
      </Router>
      {/* <ProductionContainer>
        <ProductionForm/>
        </ProductionContainer> */}

    </div>
  );
}

export default App;

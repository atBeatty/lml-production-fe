import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions } from '../actions'
import ProductionCard from '../components/ProductionCard'
import productionReducer from '../reducers/productionReducer';
import Production from './Production'

class ProductionContainer extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           productions: []
       }
   }
   

    componentDidMount() {
        this.props.fetchProductions()
        
    }

    productionsToJSX = () => {
        console.log(this.props.productions)
        if(typeof this.props.productions == "array", typeof this.props.productions) {
            debugger
            return this.props.productions.map(p => <ProductionCard key={p.id} production={p}/>)

        } else {
            return <div className="error">Error</div>
        }
    }

    render() {
        

        
        return <div className="production-container">
            {this.productionsToJSX()}
            {/* <Production/> */}
            </div>
    }

}


const mapStateToProps = state => {
    return {
        productions: state.productions
    }
}

export default connect(mapStateToProps, { fetchProductions })(ProductionContainer)


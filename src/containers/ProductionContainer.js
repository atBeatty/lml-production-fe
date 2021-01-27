import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions } from '../actions'
import ProductionCard from '../components/ProductionCard'
import productionReducer from '../reducers/productionReducer';
import Production from './Production'

class ProductionContainer extends React.Component {
   constructor(props) {
       super(props)
   }
   

    componentDidMount() {
        this.props.fetchProductions()
    }
    shouldComponentUpdate(oldState, newState, oldProps, newProps) {
        console.log(oldState, newState, oldProps, newProps)
        return true
    }


    productionsToJSX = () => {
        return this.props.productions.map((p, i) => <ProductionCard key={i} production={p}/>)
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


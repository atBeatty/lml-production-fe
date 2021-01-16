import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions } from '../actions'
import ProductionDetails from '../components/ProductionDetails'


class Production extends React.Component {
   

    
    render() {
        return <div className="production-container">
            Production Show
            <ProductionDetails production={this.props.productions} key={this.props.productions.id} />
            </div>
    }
}
const mapStateToProps = state => {
    let pageId = parseInt(window.location.href.slice(-1))
    let production = state.productions.find(prod => prod.id === pageId)

    
    return {
        productions: production
    }
}

export default connect(mapStateToProps, { fetchProductions })(Production)
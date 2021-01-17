import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions } from '../actions'
import ProductionCard from '../components/ProductionCard'


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
    
    render() {
        return <div className="production-container">

            {this.props.productions.map(p => <div key={p.id}><ProductionCard production={p}/></div>)}
            </div>
    }

}


const mapStateToProps = state => {
    return {
        productions: state.productions
    }
}

export default connect(mapStateToProps, { fetchProductions })(ProductionContainer)


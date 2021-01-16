import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions } from '../actions'
import ProductionCard from '../components/ProductionCard'
import ProductionFrom from '../components/ProductionForm';


class ProductionContainer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         productions: []
    //     }
    // }
    
    
    componentDidMount() {
        this.props.fetchProductions()
        console.log(this.state)
    }
    
    render() {
        console.log(this.props, this.state)
        return <div className="production-container">Production Container
        
        {this.props.productions.map(p => <ProductionCard production={p} key={p.id} />)}
        </div>
    }

}


const mapStateToProps = state => {
    return {
        productions: state.productions
    }
}

export default connect(mapStateToProps, { fetchProductions })(ProductionContainer)
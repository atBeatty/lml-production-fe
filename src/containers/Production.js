import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions, updateProduction, addCrew } from '../actions'
import CrewMemberInput from '../components/CrewMemberInput';
import ProductionDetails from '../components/ProductionDetails'


class Production extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            production: []
        }
    }
    
    render() {
        return <div className="production-container border">
            Production Show
            <h2>Name: {this.props.productions.name}</h2>
            <h2>{this.props.productions.client}</h2>
            <ProductionDetails updateCrew={this.props.updateProduction} production={this.props.productions} key={this.props.productions.id} />
            <CrewMemberInput addCrew= {this.props.addCrew} updateCrew={this.props.updateProduction}/>
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

export default connect(mapStateToProps, { fetchProductions, updateProduction, addCrew })(Production)
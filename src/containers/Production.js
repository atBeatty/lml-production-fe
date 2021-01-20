import React from 'react';
import  { connect } from 'react-redux'
import { addCrewMember, fetchProduction, updateProduction, addCrew } from '../actions'
import CrewMemberInput from '../components/CrewMemberInput';
import ProductionDetails from '../components/ProductionDetails'


class Production extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            production: {}
        }
    }

    componentDidMount() {
        let pageId = parseInt(window.location.href.slice(-1))
        this.props.fetchProduction(pageId)
        console.log("PRODUCTION HAS MOUNTED IN COMP", pageId, this.props.production)
        this.setState({
            production: this.props.production
        })
  
    }

    
    renderAdditionalMember = (member) => {

        console.log(this.state.production)
        
    }
    
    render() {
        console.log(this.props.production)
        return <div className="production-container border">
            <h1>{this.props.production.name}</h1>
            <h2>{this.props.production.client}</h2>

            <ProductionDetails crew={this.props.production.crew_members} production={this.props.production} />
            <CrewMemberInput renderMember={this.renderAdditionalMember} production={this.props.production} addCrewMember={this.props.addCrewMember} updateCrew={this.props.updateProduction}/>
            </div>
    }
}


const mapStateToProps = state => {
    // let pageId = parseInt(window.location.href.slice(-1))
    // let production = state.productions.find(prod => prod.id === pageId)
    // console.log(state)
    return {
        production: state.production
    }
}

export default connect(mapStateToProps, { fetchProduction, updateProduction, addCrewMember })(Production)
import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions, updateProduction, addCrew } from '../actions'
import CrewMemberInput from '../components/CrewMemberInput';
import ProductionDetails from '../components/ProductionDetails'


class Production extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            production: {},
            key: ''
        }
    }

    componentDidMount() {

        console.log(!!this.props.productions.crew)
        this.setState({...this.state,
            production: this.props.productions
        })
    }

    componentDidUpdate() {
        // this.props.fetchProductions()
        console.log("UYES")
    }
    
    renderAdditionalMember = (member) => {
        let currentCrewMembers = this.state.production.crew_members
        currentCrewMembers.push(member)
        // debugger        
        return this.setState({...this.state,


            production: {...this.state.production,
                crew_members: [currentCrewMembers]
            }
        })
        
        debugger
        
        // debugger

    }
    
    render() {
        return <div className="production-container border">
            Production Show
            <h2>Name: {this.props.productions.name}</h2>
            <h2>{this.props.productions.client}</h2>

            <ProductionDetails updateCrew={this.props.updateProduction} key={this.state.key} thisProductionShouldUpdate={this.state.production} production={this.props.productions} />
            
            <CrewMemberInput renderMember={this.renderAdditionalMember} production={this.props.productions} addCrew={this.props.addCrew} updateCrew={this.props.updateProduction}/>
            </div>
    }
}
const mapStateToProps = state => {
    let pageId = parseInt(window.location.href.slice(-1))
    let production = state.productions.find(prod => prod.id === pageId)
    // debugger
    
    return {
        productions: production
    }
}

export default connect(mapStateToProps, { fetchProductions, updateProduction, addCrew })(Production)
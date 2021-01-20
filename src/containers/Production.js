import React from 'react';
import  { connect } from 'react-redux'
import { fetchProductions, fetchProduction, updateProduction, addCrew } from '../actions'
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
  
    }

    
    renderAdditionalMember = (member) => {
        let currentCrewMembers = this.state.production.crew_members
        currentCrewMembers.push(member)
        return this.setState({...this.state,
            production: {...this.state.production,
                crew_members: [currentCrewMembers]
            }
        })
    }
    
    render() {
        console.log(this.props)
        return <div className="production-container border">
            <h1>{this.props.production.name}</h1>
            <h2>{this.props.production.client}</h2>

            <ProductionDetails updateCrew={this.props.updateProduction} production={this.props.production} />
            <CrewMemberInput renderMember={this.renderAdditionalMember} production={this.props.production} updateCrew={this.props.updateProduction}/>
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

export default connect(mapStateToProps, { fetchProduction, updateProduction })(Production)
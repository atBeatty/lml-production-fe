import  { connect } from 'react-redux'
import { addCrewMember } from '../actions'

import React from 'react'

class CrewMemberInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            currentMember: {}
        }
    }


    handleOnSubmit = (e) => {
        let pageId = window.location.href.slice(-1)
        e.preventDefault()
        debugger
        this.props.addCrewMember(pageId, this.state.currentMember)
    }
    handleOnChange = (e) => {

        e.preventDefault()
        this.setState({...this.state,
            currentMember: {...this.state.currentMember,
                [e.target.name]: e.target.value
            }
        })
    }


   render() {
       return (
               <div className="crew-form-container">
                {/* {this.crewCheck()} */}
            <form className="vertical crew-input" onSubmit={this.handleOnSubmit}>
            <label htmlFor="name">Crew Member: </label>
            <input onChange={e => this.handleOnChange(e)} type="text" name="name" value={this.state.currentMember.name}/>
            
            <label htmlFor="client">Email: </label>
            <input onChange={e => this.handleOnChange(e)} type="text" value={this.state.currentMember.email} name="email"/>
            <label htmlFor="employer">Employer: </label>
            <input onChange={e => this.handleOnChange(e)} type="text" name="employer" value={this.state.currentMember.employer}/>
            <label htmlFor="employer">Role: </label>
            <input onChange={e => this.handleOnChange(e)} type="text" name="role" value={this.state.currentMember.role}/>
            
            <label htmlFor="rate">Rate: </label>
            <input onChange={e => this.handleOnChange(e)} type="integer" value={this.state.currentMember.rate} name="rate"/>


            <input type="submit" value={this.props.action === "ADD_CREW" ? "Add Crew" : "Update Crew"}/>
            </form>
            </div>
       )
   }
}



export default connect(null, { addCrewMember })(CrewMemberInput) 

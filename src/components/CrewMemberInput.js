import React from 'react'
import  { connect } from 'react-redux'
import { addCrewMember, updateProduction } from '../actions'


class CrewMemberInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            currentMember: {},
            production: {}
        }
    }

    componentDidMount() {
        // console.log("mount", this.props)
        this.setState({...this.state,
            production: this.props.production
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addCrewMember(this.props.production.crew_id, this.state.currentMember)
        // this.props.updateProduction(this.props.production)
        this.props.renderMember(this.state.currentMember)
        this.setState({
            rating: 0,
            currentMember: {
                name:'',
                email: '',
                role: '',
                rate: '',
                employer: ''
            },
            production: {}
        })
        // this.props.history.push('/')
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

            {/* <button onClick={this.handleOnClick}>This Button Uses renderMembers as callback</button> */}
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


            <input type="submit" value="Update Crew"/>
            </form>
            </div>
       )
   }
}


const mapStateToProps = (state) => {
        let pageId = window.location.href.slice(-1)
        let production = state.productions.find(prod => prod.id === parseInt(pageId))
    return {
        production: production
    }
}
export default connect(mapStateToProps, { addCrewMember, updateProduction })(CrewMemberInput) 

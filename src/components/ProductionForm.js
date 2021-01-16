import React from 'react'
import { connect } from 'react-redux'
import { addProduction } from '../actions'


class ProductionFrom extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            client:''
        }
    }

    handleFormChange = (e) => {
        console.log(this.state, this.props)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addProduction(this.state)
    }

    render() {
        return <form onSubmit={this.handleOnSubmit} className="production-form">
                <label>
                    Name
                    <input onChange={this.handleFormChange} value={this.state.name} placeholder="NAME" name="name"></input>
                </label>
                <label>
                    Client
                    <input onChange={this.handleFormChange} value={this.state.client} name="client" placeholder="CLIENT"></input>
                </label>

                <input type="submit" value="Add Production"/>

            </form>

    }
}

export default connect(null, { addProduction })(ProductionFrom)
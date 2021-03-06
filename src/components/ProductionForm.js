import React from 'react'
import { connect } from 'react-redux'
import { addProduction } from '../actions'


class ProductionForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            client:''
        }
    }

    handleFormChange = (e) => {
        // console.log(this.state, this.props)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addProduction(this.state)
        
        this.setState({
            name: '',
            client: ''
        })

        this.props.history.push('/productions');
    }

    render() {
        return <form onSubmit={this.handleOnSubmit} className="vertical production-form">
                <label>
                    <input onChange={this.handleFormChange} value={this.state.name} placeholder="NAME" name="name"></input>
                </label>
                <label>
                    <input onChange={this.handleFormChange} value={this.state.client} name="client" placeholder="CLIENT"></input>
                </label>
                <label>

                <input type="submit" value="Add Production"/>
                </label>

            </form>

    }
}

export default connect(null, { addProduction })(ProductionForm)
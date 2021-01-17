import React from 'react'


class CommentCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: ''
        }
    }

    handleCommentForm = (e) => {
        e.preventDefault()
        this.setState({
            comment: e.target.value
        })
        console.log(this.state)
        // this.updateProduction(this.state)
    }
    handleSubmitComment = (e) => {
        e.preventDefault()
        this.props.updateProduction()
    }
    
    render() {

        return <div className="comment-card vertical">Comment Card
    <form onSubmit={this.handleSubmitComment}>
        <textarea rows={8} columns={30} type="text" name="comment" value={this.state.comment} onChange={this.handleCommentForm}></textarea>
        <input type="submit" value="Add Comment"/>
    </form>
    </div>
    }
}

export default CommentCard
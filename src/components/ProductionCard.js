import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'
import { withRouter } from 'react-router-dom'

const ProductionCard = (props) => {
   const handleClick = () => {
       window.history.push('/productions/1')
   }
    return <div className="production-card">
        <h2>{props.production.name}</h2>
        <p className="production-content">{props.production.client}</p>
        <Link to={`/productions/${props.production.id}`}>Show Page</Link>
        <button onClick={handleClick}></button>
    </div>

}

export default withRouter(ProductionCard)
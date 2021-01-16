import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

const ProductionCard = (props) => {
   
    return <div className="production-card">
        <article className="production">
        <h2>{props.production.name}</h2>
        <p className="production-content">{props.production.client}</p>
        <Link to={`/productions/${props.production.id}`}>Show Page</Link>
        </article>
    </div>

}

export default ProductionCard
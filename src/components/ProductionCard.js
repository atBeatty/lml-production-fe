import { Link } from 'react-router-dom'

import React from 'react'

const ProductionCard = (props) => {

    return (
        <div className="production-card">
       <h1>{props.production.name}</h1>
            <h2>{props.production.client}</h2>
        </div>
    )
}

export default ProductionCard
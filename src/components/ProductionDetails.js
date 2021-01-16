import React from 'react'
import CommentCard from '../components/CommentCard'
// import ProductionCard from '../components/ProductionCard'


const ProductionDetails = (props) => {
    
    const crewToJSX = props.production.crew_members.map(member => {
        return <div member-info><h2 key={member.id}>{member.name}</h2>
        <h4>{member.email}</h4>
        <h4>{member.rate}</h4>
        <h4>{member.role}</h4>
        <h4>{member.employer}</h4>

        </div>
    })

    return <div className="production-detail">
            <CommentCard />
            {crewToJSX}
        </div>
}

export default ProductionDetails 
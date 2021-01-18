import React from 'react'
import CommentCard from '../components/CommentCard'
// import ProductionCard from '../components/ProductionCard'








const ProductionDetails = (props) => {
    
    
    console.log(props.thisProductionShouldUpdate, "THIS SHOULD UPDATE")
    let crewToJSX = props.production.crew_members.map((member, i) => {
        return <div key={i} className="member-info">
        <h2>{member.name}</h2>
        <h4>{member.email}</h4>
        <h4>{member.rate}</h4>
        <h4>{member.role}</h4>
        <h4>{member.employer}</h4>

        </div>
    })

    return <div className="production-detail">
            {/* <CommentCard /> */}
            <div className="crew-member-container horizontal">
                {crewToJSX}
            </div>
           
        </div>
}

export default ProductionDetails
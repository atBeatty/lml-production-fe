import React from 'react'
import CommentCard from '../components/CommentCard'
import MemberDetails from '../components/MemberDetails'

const ProductionDetails = (props) => {
    console.log(props)

   const crewToJSX = () => {

       if (props.crew) {
           return props.crew.map(member => <MemberDetails key={member.id} member={member}/>)
        } else {
            return "No Crew?"
        }
    } 
    return <div className="margin-top production-detail">
        <h1>{props.production.name}</h1>
            {/* <CommentCard /> */}
                <h4>{props.production.client}</h4>
            <div className="margin-top crew-member-container horizontal">
            {crewToJSX()}
            </div> 
           
        </div>
}

export default ProductionDetails
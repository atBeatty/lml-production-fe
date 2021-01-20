import React from 'react'
import CommentCard from '../components/CommentCard'
import MemberDetails from '../components/MemberDetails'

const ProductionDetails = (props) => {
   console.log(props.production)
    return <div className="production-detail">
        <h1>{props.production.name}</h1>
            {/* <CommentCard /> */}
            {/* {props.crew.map(member => member.name)} */}
            <div className="crew-member-container horizontal">
                {props.crew ? props.crew.length : "No Crew"}
                 {props.production.client}
                {/* <h4>{props.production}</h4>
                <h4>{props.production}</h4> */}
            </div>
           
        </div>
}

export default ProductionDetails
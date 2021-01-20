import React from 'react'
import CommentCard from '../components/CommentCard'
import MemberDetails from '../components/MemberDetails'

const ProductionDetails = (props) => {
    console.log(props)

   const propsToJSX = () => {

       if (props.crew) {
           return props.crew.map(member => <h2>{member.name}</h2>)
        } else {
            return "No Crew?"
        }
    } 
    return <div className="production-detail">
        <h1>{props.production.name}</h1>
            {/* <CommentCard /> */}
            {propsToJSX()}
            <div className="crew-member-container horizontal">
                <h4>{props.production.client}</h4>
                {/* <h2>{props.production.client}</h2> */}
            </div>
           
        </div>
}

export default ProductionDetails
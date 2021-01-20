import React from 'react'
import CommentCard from '../components/CommentCard'
import MemberDetails from '../components/MemberDetails'

const ProductionDetails = (props) => {
    
    console.log(props)
    // let crewToJSX = props.production.crew_members.map((member, i) => {
    //     return <MemberDetails 
       
    //     name={member.name} 
    //     email={member.email} 
    //     rate={member.rate} 
    //     role={member.role} 
    //     employer={member.employer} />
    // })

    return <div className="production-detail">
            {/* <CommentCard /> */}
            <div className="crew-member-container horizontal">
                {/* {crewToJSX} */}
            </div>
           
        </div>
}

export default ProductionDetails
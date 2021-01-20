import React from 'react'


const MemberDetails = (props) => {
   
    return <div className="member-info">
        <h2>{props.member.name}</h2>
        <h4>{props.member.email}</h4>
        <h4>{props.member.role}</h4>
        <h4>{props.member.employer}</h4>
        <h4>{props.member.rate}</h4>
    </div>
}

export default MemberDetails
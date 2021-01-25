import React from 'react'


const MemberDetails = (props) => {
   
    return <div className="member-info margin-bottom">
        <h2>{props.member.name}</h2>
        <h4><span className="label">email</span>{props.member.email}</h4>
        <h4><span className="label">role</span>{props.member.role}</h4>
        <h4><span className="label">employer</span>{props.member.employer}</h4>
        <h4><span className="label">rate</span>{props.member.rate}</h4>

        <button className="button">Delete Member</button>
    </div>
}

export default MemberDetails
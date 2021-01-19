import React from 'react'


const MemberDetails = (props) => {


    return <div className="member-info">
        <h2>{props.name}</h2>
        <h4>{props.email}</h4>
        <h4>{props.role}</h4>
        <h4>{props.employer}</h4>
        <h4>{props.rate}</h4>
    </div>
}

export default MemberDetails
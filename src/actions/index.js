export const fetchProductions = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/productions')
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: "SET_PRODUCTIONS", payload: json})
        })
    }
}

export const addProduction = (production) => {
    // debugger
    return (dispatch) => {
        return fetch('http://localhost:3000/productions', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(production)
        })
        .then(resp => resp.json())
        .then(json => {
            // console.log("POST RESPONSE", json)
            dispatch({type: "ADD_PRODUCTION", payload: json})
        })
    }
}

export const addCrewMember = (id, crewMember) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/crew_members`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({...crewMember, crew_id: id})
        })
        .then(resp => resp.json())
        .then(json => {
            console.log("POST RESPONSE", json)
            dispatch({type: "ADD_CREWMEMBER", payload: json})
        })
    }
}
export const addCrew = (crewMember) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/crew_members`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(crewMember)
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: "ADD_CREW", payload: json})
        })
    }
}
export const updateProduction = (production) => {
    // debugger
    return (dispatch) => {
        return fetch(`http://localhost:3000/productions/${production.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(production)
        })
        .then(resp => resp.json())
        .then(json => {
            // console.log("POST RESPONSE", json)
            dispatch({type: "UPDATE_PRODUCTION", payload: json})
        })
    }
}
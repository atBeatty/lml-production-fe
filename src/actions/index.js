export const fetchProductions = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/productions')
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: "SET_PRODUCTIONS", payload: json})
        })
    }
}
export const fetchProduction = (id) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/productions/${id}`)
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: "SET_PRODUCTION", payload: json})
        })
    }
}

export const addProduction = (production) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/productions', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(production)
        })
        .then(resp => {console.log(resp);return resp.json()})
        .then(json => {
            dispatch({type: "ADD_PRODUCTION", payload: json})
        })
        // .catch(err => {
        //     dispatch({type: "ADD_PRODUCTION", payload: "ERROR"})
        // })
    }
}



export const removeCrewMember = (id) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/crew_members/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: "REMOVE_CREWMEMBER", payload: json})
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
            // console.log("POST RESPONSE", json)
            dispatch({type: "ADD_CREWMEMBER", payload: json})
        })
    }
}


export const updateProduction = (production) => {
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
            dispatch({type: "UPDATE_PRODUCTION", payload: json})
        })
    }
}
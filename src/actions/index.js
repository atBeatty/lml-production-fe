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
            dispatch({type: "ADD_PRODUCTION", payload: json})
        })
    }
}
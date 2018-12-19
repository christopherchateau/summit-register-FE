export const getMountain = async(id) => {
    const response = await fetch(`http://summit-register-api.herokuapp.com/api/v1/mountains/${id}`)
    const mountains = await response.json()
    return mountains
}

export const getMountainLog = async(id) => {
    const response = await fetch(`http://summit-register-api.herokuapp.com/api/v1/mountains/${id}`)
    const log = await response.json()
    return log
}
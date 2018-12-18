export const getMountain = async(id) => {
    // const response = await fetch(`http://summit-register-api.herokuapp.com/api/v1/mountains/${id}`)
    // const mountains = await response.json()
    return {
        name: "Mt. Massive",
        altitude: 14421,
        summit: "39.187298,-106.475548",
        difficulty: "Blue",
        range: "Sawatch"
      }
}
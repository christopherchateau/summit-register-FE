export const getMountain = async id => {
  if (id == 62) {
    return {
      data: {
        id: "62",
        type: "mountain",
        attributes: {
          name: "Jessie's House",
          altitude: 5207,
          summit: "39.629437599999996,-105.11570139999999",
          difficulty: "Green",
          range: "Black",
          registries: {
            data: []
          }
        }
      }
    };
  }
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/mountains/${id}`
  );
  const mountains = await response.json();
  return mountains;
};

export const postToLog = async (id, logEntry, timeStamp) => {
  const { name, hometown, comments } = logEntry;
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/mountains/${id}/registries`,
    {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        hometown,
        comments,
        sign_time: timeStamp
      }),
      headers: { "Content-Type": "application/json" }
    }
  );
  const updatedLog = await response.json();
  return updatedLog.data;
};

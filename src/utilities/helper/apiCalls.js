export const getMountain = async id => {
  const response = await fetch(
    `http://summit-register-api.herokuapp.com/api/v1/mountains/${id}`
  );
  const mountains = await response.json();
  return mountains;
};

export const getMountainLog = async id => {
  const response = await fetch(
    `http://summit-register-api.herokuapp.com/api/v1/mountains/${id}`
  );
  const log = await response.json();
  return log;
};

export const postToLog = async (id, logEntry, timeStamp) => {
  const { name, hometown, comments } = logEntry;
  const response = await fetch(
    `http://summit-register-api.herokuapp.com/api/v1/mountains/${id}/registries`,
    {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        hometown,
        comments,
        time: timeStamp
      }),
      headers: { "Content-Type": "application/json" }
    }
  );
  const data = await response.json();
  console.log(data)
  return data;
};

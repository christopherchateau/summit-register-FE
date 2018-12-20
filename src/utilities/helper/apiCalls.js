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

export const postToLog = async (id, name, hometown, comments) => {
  const response = await fetch(
    `http://summit-register-api.herokuapp.com/api/v1/mountains/${id}`,
    {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        hometown,
        comments
      }),
      headers: { "Content-Type": "application/json" }
    }
  );
  const data = await response.json();
  return data;
};

import firebase from "firebase";

export const getMountain = async id => {
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/mountains/${id}`
  );
  const mountains = await response.json();
  return mountains;
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export const getWeather = async location => {
  const response = await fetch(
    `https://summit-register-weather-api.herokuapp.com/?lat=${
      location[0]
    }&lon=${location[1]}`
  );
  const weather = await response.json();
  return weather;
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

export const postImage = async image => {
  const formData = new FormData();
  const cloudinaryPreset = "qke5dhjq";

  formData.append("file", image);
  formData.append("upload_preset", cloudinaryPreset);

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/summit-register/upload",
    {
      method: "POST",
      body: formData
    }
  );
  const data = await response.json();
  console.log(data)
  return data.secure_url;
};

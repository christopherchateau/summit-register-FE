import firebase from "firebase";

export const getMountain = async id => {
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/mountains/${id}`
  );
  const mountains = await response.json();
  return mountains;
};

export const getCurrentUser = () => {
  const data = firebase.auth().currentUser;
  let userData = {
    name: data.displayName,
    email: data.email,
    photoUrl: data.photoURL,
    emailVerified: data.emailVerified,
    uid: data.uid
  };
  return userData;
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

export const postToLog = async (id, logEntry, timeStamp, apiKey) => {
  const { name, hometown, comments, imageUrl } = logEntry;
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/mountains/${id}/registries`,
    {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        hometown,
        comments,
        image_url: imageUrl,
        sign_time: timeStamp,
        api_key: apiKey
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
  return data.url;
};

export const postUserCredentials = async userData => {
  const { name, uid } = userData;
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/users`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        uid
      })
    }
  );
  const userRegistry = await response.json();
  return userRegistry;
};

export const getMyMountains = async id => {
  const response = await fetch(
    `https://summit-register-api.herokuapp.com/api/v1/users/${id}`
  );
  const myMountains = await response.json();
  return myMountains.data.attributes.registries.data;
};

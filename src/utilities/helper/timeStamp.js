export const generateTimeStamp = () => {
  const currentdate = new Date();
  const timeStamp =
    currentdate.getMonth() + 1 +
    "/" +
    currentdate.getDate() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return timeStamp;
};

export const convertUnixTimeStamp = unixTimeStamp => {
  let hours = new Date(unixTimeStamp * 1000).getHours();

  if (hours < 12) hours += "am";
  if (hours === 12) hours += "pm";
  if (hours > 12) hours = hours - 12 + "pm";
  return hours;
};
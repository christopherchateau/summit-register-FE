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

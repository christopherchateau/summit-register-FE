export const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      return "Geo Location not supported by browser";
    }
  };
  
  export const showPosition = position => {
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    //console.log(location);
  };
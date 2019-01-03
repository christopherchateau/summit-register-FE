export const getMountain = jest.fn().mockImplementation(() => ({
  data: {
    id: "4",
    type: "mountain",
    attributes: {
      altitude: 14345,
      difficulty: "Black",
      name: "Blanca Peak",
      range: "Sangre de Cristo",
      summit: "37.577473,-105.485443",
      registries: {
        data: [
          {
            id: "5",
            type: "registry",
            attributes: {
              name: "Chris",
              hometown: "Detroit",
              comments: "Hiking rules",
              date: "2018-12-26 20:03:00 UTC",
              sign_time: "26/12/2018 @ 13:2:59"
            }
          },
          {
            id: "6",
            type: "registry",
            attributes: {
              name: "Justin",
              hometown: "Denver",
              comments: "14ers r sooper lit",
              date: "2018-12-25 20:05:00 UTC",
              sign_time: "25/12/2018 @ 13:4:59"
            }
          }
        ]
      }
    }
  }
}));

export const getCurrentUser = jest.fn().mockImplementation(() => ({
  email: "justinstewart3313@gmail.com",
  emailVerified: true,
  name: "Justin S",
  photoUrl:
    "https://lh6.googleusercontent.com/-pSIwWNMafUA/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaWlCy7imswUFxVJ8nakIaabrRwlA/mo/photo.jpg",
  uid: "fYLGD6WzgDdIs4K9LVsW9ODES6x2"
}));

export const postToLog = jest.fn().mockImplementation(() => [
  {
    id: "5",
    type: "registry",
    attributes: {
      name: "Andrew M",
      hometown: "Longmont",
      comments: "Hiking rules",
      date: "2018-12-26 20:03:00 UTC",
      sign_time: "26/12/2018 @ 13:2:59"
    }
  },
  {
    id: "6",
    type: "registry",
    attributes: {
      name: "Andrew T",
      hometown: "Highlands Ranch",
      comments: "14ers r sooper lit",
      date: "2018-12-25 20:05:00 UTC",
      sign_time: "25/12/2018 @ 13:4:59"
    }
  }
]);

export const postImage = jest.fn().mockImplementation(() => 'http://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg');

export const getWeather = jest.fn().mockImplementation(() => ({
  summary: "Mostly cloudy throughout the day.",
  icon: "partly-cloudy-night",
  data: [
    {
      time: 1546041600,
      summary: "Mostly Cloudy",
      icon: "partly-cloudy-night",
      precipIntensity: 0.0245,
      precipProbability: 0.55,
      precipType: "rain",
      temperature: 72.8,
      apparentTemperature: 74.25,
      dewPoint: 71.32,
      humidity: 0.95,
      pressure: 1017.9,
      windSpeed: 12.39,
      windGust: 19.46,
      windBearing: 164,
      cloudCover: 0.93,
      uvIndex: 0,
      visibility: 10,
      ozone: 221.8
    },
    {
      time: 1546045200,
      summary: "Mostly Cloudy",
      icon: "partly-cloudy-night",
      precipIntensity: 0.0151,
      precipProbability: 0.46,
      precipType: "rain",
      temperature: 72.88,
      apparentTemperature: 74.33,
      dewPoint: 71.33,
      humidity: 0.95,
      pressure: 1017.98,
      windSpeed: 12.59,
      windGust: 19.69,
      windBearing: 165,
      cloudCover: 0.92,
      uvIndex: 0,
      visibility: 9.42,
      ozone: 221.84
    },
    {
      time: 1546048800,
      summary: "Overcast",
      icon: "cloudy",
      precipIntensity: 0.0071,
      precipProbability: 0.33,
      precipType: "rain",
      temperature: 72.93,
      apparentTemperature: 74.37,
      dewPoint: 71.3,
      humidity: 0.95,
      pressure: 1018.24,
      windSpeed: 12.36,
      windGust: 19.13,
      windBearing: 166,
      cloudCover: 0.99,
      uvIndex: 0,
      visibility: 6.74,
      ozone: 221.74
    }
  ]
}));

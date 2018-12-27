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

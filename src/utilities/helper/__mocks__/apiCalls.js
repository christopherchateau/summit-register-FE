export const getMountain = jest.fn().mockImplementation(() => ({
  data: {
    attributes: {
      registries: {
        data: [
          {
            name: "Chris",
            hometown: "Detroit",
            comments: "Hiking rules",
            date: "2018-12-26 20:03:00 UTC",
            sign_time: "26/12/2018 @ 13:2:59"
          },
          {
            name: "Justin",
            hometown: "Denver",
            comments: "14ers r sooper lit",
            date: "2018-12-25 20:05:00 UTC",
            sign_time: "25/12/2018 @ 13:4:59"
          }
        ]
      }
    }
  }
}));

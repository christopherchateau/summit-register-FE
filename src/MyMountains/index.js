import React, { Component } from "react";
import "./MyMountains.css";

const registries = [
  {
    name: "Chris",
    hometown: "Denver",
    comments: "Hi",
    image_url:
      "https://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg",
    sign_time: "1/1/2019 @ 17:47:41",
    mountain_id: "1"
  },
  {
    name: "Chris",
    hometown: "Denver",
    comments: "Hi again",
    image_url:
      "https://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg",
    sign_time: "1/2/2019 @ 17:47:41",
    mountain_id: "1"
  },
  {
    name: "Chris",
    hometown: "Denver",
    comments: "Hi",
    image_url:
      "https://res.cloudinary.com/summit-register/image/upload/v1546476463/pe0msmw1hh91l5dv9kha.jpg",
    sign_time: "1/2/2019 @ 17:47:41",
    mountain_id: "2"
  }
];

class MyMountains extends Component {
  render() {
    const myMountains = registries.reduce((acc, log) => {
      if (!acc[log.mountain_id]) {
        acc[log.mountain_id] = [];
      }
      acc[log.mountain_id].push(log);
      return acc;
    }, {});

    const MyMountainNames = Object.keys(myMountains)

    const displayMyMountains = MyMountainNames.map(mountain => {
      // console.log(myMountains[mountain])
      // mountain.map(log => {
      //   return (
      //     <div className="comment" key={log.id}>
      //       <h4>Name: {log.name}</h4>
      //       <h4>Hometown: {log.hometown}</h4>
      //       <h4>Comments: {log.comments} </h4>
      //       <h4>Date: {log.sign_time}</h4>
      //       <img className="user-image" alt="user image" src={log.image_url} />
      //     </div>
      //   );
      // });
    });

    return (
      <div className="MyMountains">
        {/* <section className="mountain-container">{mountain}</section> */}
      </div>
    );
  }
}

export default MyMountains;

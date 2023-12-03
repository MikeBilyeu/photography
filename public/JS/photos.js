"use strict";
//wait for page to load all content befod
window.onload = () => {
  const photos = [
    {
      src: "https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545940310/Portraits/skate/img089.jpg",
      des: "Kevin Bilyeu - Bs Nosegrind | Philadelphia, Pa. 2017",
      name: "Kevin Bilyeu",
      location: "Philadelphia",
      date: "",
    },
    {
      src: "https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1582925099/img198.jpg",
      des: "Jahmir Brown - Switch Bs 5-0 | Philadelphia, Pa. 2017",
      name: "Jahmir Brown",
      location: "Philadelphia",
      date: "",
    },
    {
      src: "https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545964473/img046.jpg",
      des: "Kevin Bilyeu - Kickflip | Philadelphia, Pa. 2017",
      name: "Kevin Bilyeu",
      location: "Philadelphia",
      date: "",
    },
    {
      src: "https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1582926886/img153.jpg",
      des: "Tyler Dietterich - Fs 5-0 | Philadelphia, Pa. 2018",
      name: "Tyler Dietterich",
      location: "Philadelphia",
      date: "",
    },
    {
      src: "https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545938970/Portraits/skate/img100.jpg",
      des: "Kevin Bilyeu - Switch Tail Slide | New York, N.Y. 2017",
      name: "Kevin Bilyeu",
      location: "New York",
      date: "",
    },
    {
      src: "https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545940738/Portraits/skate/img074.jpg",
      des: "Kevin & AJ | Philadelphia, Pa. 2017",
      name: "Kevin Bilyeu AJ Mac",
      location: "Philadelphia",
      date: "",
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941332/img028.jpg`,
      des: "Kevin Bilyeu - Nollie Fs Flip | Philadelphia, Pa. 2017",
      name: "Kevin Bilyeu",
      location: "Philadelphia",
      date: "",
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941474/img062.jpg`,
      des: "Paris Summerville - Ollie North | Philadelphia, Pa. 2017",
      name: "Paris Summerville",
      location: "Philadelphia",
      date: "",
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941595/img142.jpg`,
      des: "Kevin Bilyeu - Nollie 5-0 | Philadelphia, Pa. 2017",
      name: "Kevin Bilyeu",
      location: "Philadelphia",
      date: "",
    },
  ];

  function addImg(src, des) {
    let photograph = document.createElement("img");
    photograph.setAttribute("src", src);
    photograph.setAttribute("class", "photos");
    photograph.setAttribute("alt", des);

    document.getElementById("photo-container").appendChild(photograph);
  }

  (function loadAllPhotos() {
    for (let photo of photos) {
      addImg(photo.src, photo.des);
    }
  })();
};

'use strict';
//wait for page to load all content befod
window.onload = () => {
  const photos = [
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941985/img124-2-2.jpg',
      des: 'Jahmir Brown - Switch Bs Tail Slide | Philadelphia, Pa. 2017',
      name: 'Jahmir Brown',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545938970/Portraits/skate/img100.jpg',
      des: 'Kevin Bilyeu - Switch Tail Slide | New York, N.Y. 2017',
      name: 'Kevin Bilyeu',
      location: 'New York',
      date: ''
    },
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545939311/Portraits/skate/img125.jpg',
      des: 'Tyler Dietterich - 5-0 stall | Philadelphia, Pa. 2018',
      name: 'Tyler Dietterich',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_30/v1545938032/Portraits/skate/img143.jpg',
      des: 'Chris Falo - Fs 180 Switch 5-0 | Philadelphia, Pa. 2018',
      name: 'Chris Falo',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545940310/Portraits/skate/img089.jpg',
      des: 'Kevin Bilyeu - Bs Nosegrind | Philadelphia, Pa. 2017',
      name: 'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545940738/Portraits/skate/img074.jpg',
      des: 'Kevin & AJ | Philadelphia, Pa. 2017',
      name: 'Kevin Bilyeu AJ Mac',
      location: 'Philadelphia',
      date: ''

    },
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_60/v1545938366/Portraits/skate/img096.jpg',
      des: 'Paris Summerville | Philadelphia, Pa. 2017',
      name: 'Paris Summerville',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941332/img028.jpg`,
      des: 'Kevin Bilyeu - Nollie Fs Flip | Philadelphia, Pa. 2017',
      name:'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941474/img062.jpg`,
      des: 'Paris Summerville - Ollie North | Philadelphia, Pa. 2017',
      name:'Paris Summerville',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545940032/Portraits/skate/img115-3.jpg`,
      des: 'Kevin Bilyeu - Bs Tail Slide | Philadelphia, Pa. 2017',
      name:'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941595/img142.jpg`,
      des: 'Kevin Bilyeu - Nollie 5-0 | Philadelphia, Pa. 2017',
      name:'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto/v1545941696/img118-2.jpg`,
      des: 'Jahmir Brown - Switch Crook | Washington, D.C. 2017',
      name: 'Jahmir Brown',
      location: 'DC',
      date: ''
    }
  ]


  let topLine = document.getElementById('topLine'),
  bottomLine = document.getElementById('bottomLine'),
  menu = document.getElementById('menu'),
  body = document.body,
  menuLink = document.querySelectorAll('.menuLink'),
  photoDescription = document.getElementById('photo-description');

  function toggleMenu() {
    topLine.classList.toggle('slideLeft');
    bottomLine.classList.toggle('changeColor');
    menu.classList.toggle('slideLeft');
    menuLink.forEach((elem) => {
      elem.classList.toggle('delaySlide');
    });
    body.classList.toggle('preventScroll');
  }

  document.getElementById('hamburger').onclick = () => toggleMenu();

  document.getElementById('menuHome').onclick = () => toggleMenu();

  if(false) {

    // document.getElementById('leftArrow').classList.add('removeMobile');
    // document.getElementById('rightArrow').classList.add('removeMobile');

    function addImg(src, des) {
      let photograph = document.createElement('img');
      photograph.setAttribute("src", src);
      photograph.setAttribute('class', 'photos');
      photograph.setAttribute("alt", des);

      photoDescription.innerHTML = des;
      document.getElementById('photo-container').appendChild(photograph);
    }

    addImg(photos[1].src, photos[1].des);
    addImg(photos[2].src, photos[2].des);
    addImg(photos[3].src, photos[3].des);
    addImg(photos[4].src, photos[4].des);

  } else if(true) {


    let clicknumber = Math.floor(Math.random() * (photos.length - 1));

    document.getElementById('photo').setAttribute("src", photos[clicknumber].src);
    photoDescription.innerHTML = photos[clicknumber].des;


    //click on left or right arrow + or - from the click number
    //set the src of the img to the click number and load img124


    //right click ++ number click if
    document.getElementById('rightArrow').onclick = () => {
      (clicknumber < photos.length - 1) ? clicknumber++ : clicknumber = 0;

      document.getElementById('photo').setAttribute("src", photos[clicknumber].src);
      photoDescription.innerHTML = photos[clicknumber].des;

    }

    document.getElementById('leftArrow').onclick = () => {
      (clicknumber > 0) ? clicknumber-- : clicknumber = photos.length-1;

      document.getElementById('photo').setAttribute("src", photos[clicknumber].src);
      photoDescription.innerHTML = photos[clicknumber].des;

    }
  }
}

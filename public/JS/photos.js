//wait for page to load all content befod
window.onload = () => {
  const landscapURl = 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto:goodw,w_1500,ar_3:2,c_scale,f_auto/v1544490872/Portraits/skate/';
  const portraitURl = 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto:good,w_800,ar_2:3,c_scale,f_auto/v1544490872/Portraits/skate/';
  const photos = [
    {
      src: 'https://res.cloudinary.com/mikebilyeuimg/image/upload/q_auto:best,w_1500,ar_3:2,c_scale,f_auto/v1544490872/Portraits/skate/img124-2-2.jpg',
      des: 'Jahmir Brown ssbsts',
      name: 'Jahmir Brown',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `${portraitURl}img028.jpg`,
      des: 'Kevin Bilyeu Nollie fs flip trash can',
      name:'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `${portraitURl}img062.jpg`,
      des: 'Paris Summerville ollie north',
      name:'Paris Summerville',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `${portraitURl}img115.jpg`,
      des: 'Kevin Bilyeu bs tail',
      name:'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `${portraitURl}img142_copy.jpg`,
      des: 'Kevin Bilyeu Nollie 5-0 rail',
      name:'Kevin Bilyeu',
      location: 'Philadelphia',
      date: ''
    },
    {
      src: `${portraitURl}img118-2.jpg`,
      des: 'Jahmir Brown sw crook',
      name: 'Jahmir Brown',
      location: 'DC',
      date: ''
    }
  ]


  let topLine = document.getElementById('topLine'),
  bottomLine = document.getElementById('bottomLine'),
  menu = document.getElementById('menu'),
  body = document.body,
  menuLink = document.querySelectorAll('.menuLink');

  function toggleMenu() {
    topLine.classList.toggle('slideLeft');
    menu.classList.toggle('slideLeft');
    menuLink.forEach((elem) => {
      elem.classList.toggle('delaySlide');
    });
    body.classList.toggle('preventScroll');
  }

  document.getElementById('hamburger').onclick = () => toggleMenu();

  document.getElementById('menuHome').onclick = () => toggleMenu();

  if(screen.width < 900) {

    function addImg(src, des) {
      let photograph = document.createElement('img');
      photograph.setAttribute("src", src);
      photograph.setAttribute('class', 'photos');
      photograph.setAttribute("alt", des);

      document.getElementById('photo-container').appendChild(photograph);
    }

    addImg(photos[1].src, photos[1].des);
    addImg(photos[2].src, photos[2].des);
    addImg(photos[3].src, photos[3].des);
    addImg(photos[4].src, photos[4].des);

    document.getElementById('imgButton').onclick = () => {
      let img = document.createElement('img');
      img.setAttribute("src", photos[0].src);
      img.setAttribute("class", "photos");
      document.getElementById('photo-container').appendChild(img);
    }

  } else if(screen.width > 900) {

    let clicknumber = 0;

    //click on left or right arrow + or - from the click number
    //set the src of the img to the click number and load img124


    //right click ++ number click if
    document.getElementById('rightArrow').onclick = () => {
      (clicknumber < photos.length - 1) ? clicknumber++ : clicknumber = 0;

      document.getElementById('photo').setAttribute("src", photos[clicknumber].src);

    }

    document.getElementById('leftArrow').onclick = () => {
      (clicknumber > 0) ? clicknumber-- : clicknumber = photos.length-1;

      document.getElementById('photo').setAttribute("src", photos[clicknumber].src);

    }



  }



}

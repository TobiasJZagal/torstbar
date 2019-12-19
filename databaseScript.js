window.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("vid").volume = 0;
  get();
  get2();
}

function get() {
  fetch("https://rockstardata-e28c.restdb.io/rest/torst", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5cf21329102f585b7c8536c9",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(json => {
      //console.table(json);
    });
}

function post(item) {
  if (item.acf.category == "about") {
    document.querySelector(".OmHeadline").textContent = item.acf.headline;
    document.querySelector(".OmText").textContent = item.acf.text;
  } else if (item.acf.category == "special page") {
    let temp = document.querySelector("#tempSection");
    let dest = document.querySelector(".eventContainer");
    klon = temp.cloneNode(true).content;
    klon.querySelector(".headerEvent").textContent = item.acf.header;
    klon.querySelector(".textEvent").textContent = item.acf.text;
    dest.appendChild(klon);
    console.log(item.acf.header);
  }
}

function get2() {
  fetch("http://tobiasjzagal.dk/torst/wordpress/wp-json/wp/v2/pages")
    .then(res => res.json())
    .then(dataW => {
      console.log(dataW[1].title.rendered);
      console.log(dataW[0].acf.number);
      dataW.forEach(post);
    });
}

let pauseButton = document.getElementById("pause");
let muteButton = document.getElementById("mute");
let video = document.getElementById("vid");

video.addEventListener("ended", () => {
  pauseButton.src = "icons/playW.png";
  console.log("teeeeeeeeeeeeeest");
});

pauseButton.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
    pauseButton.src = "icons/pauseW.png";
  } else {
    video.pause();
    pauseButton.src = "icons/playW.png";
  }
});

muteButton.addEventListener("click", () => {
  if (video.volume == 0) {
    video.volume = 1;
    muteButton.src = "icons/muteW.png";
  } else {
    video.volume = 0;
    muteButton.src = "icons/volumeW.png";
  }
});

let about = document.querySelector(".linkOm");
let events = document.querySelector(".linkEvents");
let info = document.querySelector(".linkInfo");
let burger = document.querySelector(".burgerMenu");

burger.addEventListener("click", () => {
  if (document.querySelector("#burger").checked == false) {
    burger.textContent = "X";
  } else {
    burger.textContent = "☰";
  }
  console.log("test");
});

function toggle() {
  document.querySelector("#burger").checked = false;
}

about.addEventListener("click", function() {
  toggle();
});
events.addEventListener("click", function() {
  toggle();
});
info.addEventListener("click", function() {
  toggle();
});

let carouselGlide = document.querySelector(".glide");

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  autoplay: 4000,
  hoverpause: true,
  animationTimingFunc: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
  animationDuration: 900,
  breakpoints: {
    700: {
      perView: 2
    },
    600: {
      perView: 2,
      focusAt: "center"
    }
  }
}).mount();
/*
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 6
}).mount();
*/

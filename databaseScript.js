window.addEventListener("DOMContentLoaded", init);

function init() {
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
let video = document.getElementById("vid");

pauseButton.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
    pauseButton.src = "icons/pause.png";
  } else {
    video.pause();
    pauseButton.src = "icons/play.png";
  }
});

let carouselGlide = document.querySelector(".glide");

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3
}).mount();
/*
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 6
}).mount();
*/

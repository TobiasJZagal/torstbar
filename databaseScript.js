window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("hello world");
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
      console.table(json);
    });
}

function post(item) {
  let temp = document.querySelector("#tempSection").cloneNode(true).content;
  if (item.acf.category == "about") {
    temp.querySelector("#columnTemp").textContent += item.title.rendered;
    temp.querySelector("#columnTemp").innerHTML += item.excerpt.rendered;

    document.querySelector("#om").appendChild(temp);
  }
  console.log(item);
}

function get2() {
  fetch("http://tobiasjzagal.dk/torst/wordpress/wp-json/wp/v2/pages")
    .then(res => res.json())
    .then(dataW => {
      console.log(dataW[0].title.rendered);
      console.log(dataW[0].acf.number);
      dataW.forEach(post);
    });
}

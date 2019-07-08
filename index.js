import Turbolinks from "turbolinks";

Turbolinks.start();

const body = document.querySelector("body");
const js = body.querySelectorAll("script");
const head = document.querySelector("head");

document.addEventListener("turbolinks:load", function() {
  console.log("TurboFlow is Loaded! v3");
  js.forEach(bs => {
    head.appendChild(bs);
    body.removeChild(bs);
  });
});

// Remove & Replace Head
document.addEventListener("turbolinks:before-cache", function() {
  console.log("before-cache");
  const script = document.querySelector("script.turboflow");
  const title = document.querySelector("title");
  const meta = document.querySelectorAll("meta");
  head.innerHTML = "";
  head.appendChild(title);
  head.appendChild(script);
  meta.forEach(m => {
    head.appendChild(m);
  });

  js.forEach(s => {
    body.removeChild(s);
  });
});

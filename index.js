import Turbolinks from "turbolinks";

Turbolinks.start();

document.addEventListener("turbolinks:load", function() {
  console.log("TurboFlow is Loaded!");
});

// Remove & Replace Head
document.addEventListener("turbolinks:before-cache", function() {
  const script = document.querySelector("script.turboflow");
  const head = document.querySelector("head");
  const title = document.querySelector("title");
  const meta = document.querySelectorAll("meta");
  const body = document.querySelector("body");
  const js = body.querySelectorAll("script");

  head.innerHTML = "";
  head.appendChild(title);
  head.appendChild(link);
  head.appendChild(script);
  meta.forEach(m => {
    head.appendChild(m);
  });

  js.forEach(script => {
    body.removeChild(script);
  });
});

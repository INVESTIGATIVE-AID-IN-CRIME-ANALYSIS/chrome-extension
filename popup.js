document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkPageButton = document.getElementById("checkPage");
    var x = document.getElementById("location");
    var y = document.getElementById("password");
    let url;
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      url = tabs[0].url;
    });
    checkPageButton.addEventListener(
      "click",
      function () {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            var crd = pos.coords;
            x.innerHTML = `Latitude : ${crd.latitude} , Longitude: ${crd.longitude}`;
          },
          (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
        );
        f = Array(12)
          .fill(
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          )
          .map(function (x) {
            return x[Math.floor(Math.random() * x.length)];
          })
          .join("");
        y.innerHTML = f + url;
      },
      false
    );
  },
  false
);

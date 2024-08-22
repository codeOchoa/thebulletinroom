// Configuracion principal

document.addEventListener("DOMContentLoaded", function () {
    fetch("./src/components/nav.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      })
      .catch(error => console.error("Error loading navbar:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("./src/components/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(error => console.error("Error loading footer:", error));
});
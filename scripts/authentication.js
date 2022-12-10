let params = new URLSearchParams(document.location.search);
let route = params.get("return");

!route ||
  document.querySelectorAll("[data-auth-route]").forEach((anchor) => {
    let params = new URLSearchParams(document.location.search);
    let route = params.get("return");
    anchor.href = `./checkout.html?id=${route}`;
  });

isLogged() &&
  (document.querySelector(".nav-items").innerHTML =
    '<a href="./user-panel.html"><img src="./assets/profile.jpeg" class="profile" /></a>');

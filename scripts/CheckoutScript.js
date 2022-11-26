const form = document.getElementById("passengerForm");

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});

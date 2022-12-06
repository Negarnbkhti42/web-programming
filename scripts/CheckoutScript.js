const passengerList = document.getElementById("passengerList");
const form = document.getElementById("passengerForm");

const firstSection = document.getElementById("firstPassenger");
const extraSection = document.getElementById("extraPassenger");

passengerList.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!passengerList.checkValidity()) {
    event.stopPropagation;
    passengerList.classList.add("was-validated");
  } else {
    firstSection.hidden = true;
    extraSection.hidden = false;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
  } else {
    console.log(event);
  }
});

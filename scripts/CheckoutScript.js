const initialForm = document.getElementById("firstPassengerForm");
const form = document.getElementById("passengerForm");

const firstSection = document.getElementById("firstPassenger");
const extraSection = document.getElementById("extraPassenger");

initialForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!initialForm.checkValidity()) {
    event.stopPropagation;
    initialForm.classList.add("was-validated");
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

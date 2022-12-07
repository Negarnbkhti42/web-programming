const getPassenger = (name, passNo) => `<div class="card theme-dependant">
<div class="card-body d-flex justify-content-between">
  <p>${name}</p>
  <p>${passNo}</p>
</div>
</div>`;

const initialForm = document.getElementById("firstPassengerForm");
const form = document.getElementById("passengerForm");
const MODAL = document.getElementById("exampleModal");

const passengerListSection = document.getElementById("passengerList");
const extraSection = document.getElementById("extraPassenger");

initialForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!initialForm.checkValidity()) {
    event.stopPropagation;
    initialForm.classList.add("was-validated");
  } else {
    let name = event.target.querySelector("#passengerName").value;
    let passNo = event.target.querySelector("#passportNo").value;
    passengerListSection.innerHTML = getPassenger(name, passNo);
    extraSection.hidden = false;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
  } else {
    let name = event.target.querySelector("#passengerName");
    let passNo = event.target.querySelector("#passportNo");
    passengerListSection.innerHTML += getPassenger(name.value, passNo.value);
    name.value = "";
    passNo.value = "";
    form.classList.remove("was-validated");
    console.log(event);
  }
});

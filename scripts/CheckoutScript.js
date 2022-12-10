const getPassenger = (name, passNo) => `<div class="card theme-dependant mb-2">
<div class="card-body d-flex justify-content-between">
  <p>${name}</p>
  <p>${passNo}</p>
</div>
</div>`;

let remainedCapacity = 0;

const initialForm = document.getElementById("firstPassengerForm");
const form = document.getElementById("passengerForm");
const MODAL = document.getElementById("exampleModal");

const passengerListSection = document.getElementById("passengerList");
const extraSection = document.getElementById("extraPassenger");

const passengerAdder = document.getElementById("passengerAdder");

function getTicketId() {
  let params = new URLSearchParams(document.location.search);
  return params.get("id");
}

function decreaseCapacity() {
  remainedCapacity--;

  if (!remainedCapacity) {
    passengerAdder.disabled = true;
  }
}

function clearForm(fields, form) {
  fields.forEach((field) => (field.value = ""));
  form.classList.remove("was-validated");
}

function setTicketData() {
  const id = getTicketId();
  const ticket = TICKETS.find((item) => item.id === id);

  remainedCapacity = ticket.flight_capacity;

  document.getElementById("capacityField").innerHTML =
    ticket.flight_capacity + " نفر";

  const airline = document.getElementById("airlineField");
  const airlineImg = airline.querySelector("img");
  airlineImg.src = AIRLINE_LOGOS[ticket.airline];
  airlineImg.alt = ticket.airline;
  airline.querySelector("p").innerHTML = AIRLINE_NAMES[ticket.airline];

  document.getElementById("startTime").innerHTML = ticket.start_time;
  document.getElementById("startDate").innerHTML = ticket.start_date;
  document.getElementById("finishTime").innerHTML = ticket.finish_time;
  document.getElementById("finishDate").innerHTML = ticket.finish_date;

  document.getElementById("duration").innerHTML = ticket.duration;

  document.getElementById("source").innerHTML = ticket.source;
  document.getElementById("destination").innerHTML = ticket.destination;
}

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
    decreaseCapacity();
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
    clearForm([name, passNo], form);
    console.log(event);

    decreaseCapacity();
  }
});

document
  .querySelector("[data-form-cancel]")
  .addEventListener("click", (event) => {
    let name = form.querySelector("#passengerName");
    let passNo = form.querySelector("#passportNo");
    clearForm([name, passNo], form);
  });

setTicketData();

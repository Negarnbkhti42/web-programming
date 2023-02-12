const ticketContainer = document.getElementById("ticketList");
const sourceInput = document.getElementsByName("source")[0];
const destInput = document.getElementsByName("dest")[0];
const dateInput = document.getElementsByName("date")[0];
const passengerInput = document.getElementsByName("passenger")[0];

function getSearchInfo() {
  let params = new URLSearchParams(document.location.search);
  return {
    origin: params.get(SOURCE_PARAM) || "",
    dest: params.get(DEST_PARAM) || "",
    departure: params.get(DATE_PARAM) || "",
    y_class_free_capacity: params.get(PASSENGER_PARAM) || 0,
    j_class_free_capacity: 0,
    f_class_free_capacity: 0,
  };
}

function setInputs(searchParams) {
  sourceInput.value = searchParams.source;
  destInput.value = searchParams.dest;
  dateInput.value = searchParams.date;
  passengerInput.value = searchParams.passengers;
}

function displayTickets(searchParams) {
  ticketContainer.innerHTML = "";
  fetch("http://localhost:9000", {
    method: "POST",
    body: JSON.stringify(searchParams),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length) {
        data.forEach((ticket) => {
          ticketContainer.innerHTML += TICKET_STRUCTURE(ticket);
        });
      } else {
        ticketContainer.innerHTML =
          '<img class="empty-result" src="./assets/emptySearch.svg" alt="not result found" /><p class="h5 mt-3">بلیطی با این مشخصات وجود ندارد!</p>';
      }
    })
    .catch((err) => {
      ticketContainer.innerHTML =
        '<img class="empty-result" src="./assets/emptySearch.svg" alt="not result found" /><p class="h5 mt-3">اتصال به شبکه با خطا مواجه شد!</p>';
    });
}

function fetchTicket() {}

let searchParams = getSearchInfo();
setInputs(searchParams);
displayTickets(searchParams);

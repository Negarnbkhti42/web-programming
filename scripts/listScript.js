const ticketContainer = document.getElementById("ticketList");
const sourceInput = document.getElementsByName("source")[0];
const destInput = document.getElementsByName("dest")[0];
const dateInput = document.getElementsByName("date")[0];
const passengerInput = document.getElementsByName("passenger")[0];

function getSearchInfo() {
  let params = new URLSearchParams(document.location.search);
  return {
    source: params.get(SOURCE_PARAM) || "",
    dest: params.get(DEST_PARAM) || "",
    date: params.get(DATE_PARAM) || "",
    passengers: params.get(PASSENGER_PARAM) || 0,
  };
}

function setInputs(searchParams) {
  sourceInput.value = searchParams.source;
  destInput.value = searchParams.dest;
  dateInput.value = searchParams.date;
  passengerInput.value = searchParams.passengers;
}

function displayTickets(searchParams) {
  const filteredTickets = filterTickets(searchParams);

  ticketContainer.innerHTML = "";

  if (filteredTickets.length) {
    filteredTickets.forEach((ticket) => {
      ticketContainer.innerHTML += TICKET_STRUCTURE(ticket);
    });
  } else {
    ticketContainer.innerHTML =
      '<img class="empty-result" src="./assets/emptySearch.svg" alt="not result found" /><p class="h5 mt-3">بلیطی با این مشخصات وجود ندارد!</p>';
  }
}

let searchParams = getSearchInfo();
setInputs(searchParams);
displayTickets(searchParams);

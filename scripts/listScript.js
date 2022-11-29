const ticketContainer = document.getElementById("ticketList");

function getSearchInfo() {
  console.log("searching...");
  let params = new URLSearchParams(document.location.search);
  return {
    source: params.get(SOURCE_PARAM),
    dest: params.get(DEST_PARAM),
    date: new Date(params.get(DATE_PARAM) || ""),
    passengers: params.get(PASSENGER_PARAM),
  };
}

function displayTickets(searchParams) {
  const filteredTickets = filterTickets(searchParams);

  ticketContainer.innerHTML = "";

  filteredTickets.forEach((ticket) => {
    ticketContainer.innerHTML += `<div class="card w-100 theme-dependant mb-5">
    <div class="card-body d-flex flex-column">
      <div class="d-flex align-items-stretch ticket">
        <div class="p-2">
          <a href="#" class="btn btn-primary w-100">
            <p>
              <span class="badge text-bg-warning">${ticket.class}</span>
              ${ticket.price} تومان
            </p>
          </a>
        </div>

        <div class="p-2 flex-grow-1">
          <div
            class="d-flex align-items-start justify-content-center flight-location"
          >
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold">${ticket.start_time}</p>
              <p>${ticket.start_date}</p>
              <p>${ticket.source}</p>
            </div>
            <div class="w-25 d-flex justify-content-center flight-duration">
              ${ticket.duration}
            </div>
            <div class="d-flex flex-column align-items-center">
              <p class="fw-bold">${ticket.finish_time}</p>
              <p>${ticket.finish_date}</p>
              <p>${ticket.destination}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top d-flex align-items-end">
        ظرفیت باقی مانده: ${ticket.flight_capacity} نفر
        <span class="badge text-bg-danger ms-2">ظرفیت محدود</span>
      </div>
    </div>
  </div>`;
  });
}

let searchParams = getSearchInfo();
console.log(searchParams);
displayTickets(searchParams);

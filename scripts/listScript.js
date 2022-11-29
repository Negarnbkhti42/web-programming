function getSearchInfo() {
  console.log("searching...");
  let params = new URLSearchParams(document.location.search);
  return {
    source: params.get(SOURCE_PARAM),
    dest: params.get(DEST_PARAM),
    date: new Date(params.get(DATE_PARAM)),
    passengers: params.get(PASSENGER_PARAM),
  };
}

function displayTickets(searchParams) {
  const filteredTickets = filterTickets(searchParams);
}

let searchParams = getSearchInfo();
console.log(searchParams);
displayTickets(searchParams);

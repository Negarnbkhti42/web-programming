import {
  DATE_PARAM,
  DEST_PARAM,
  PASSENGER_PARAM,
  SOURCE_PARAM,
} from "../utils";

function getSearchInfo() {
  let params = new URLSearchParams(document.location.search);
  return {
    source: params.get(SOURCE_PARAM),
    dest: params.get(DEST_PARAM),
    date: params.get(DATE_PARAM),
    passengers: params.get(PASSENGER_PARAM),
  };
}

function displayTickets() {}

let searchParams = getSearchInfo();

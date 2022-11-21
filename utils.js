export const CITIES = [
  "تهران",
  "شیراز",
  "اصفهان",
  "قم",
  "مشهد",
  "سمنان",
  "گرگان",
  "تبریز",
  "قزوین",
  "اهواز",
  "زنجان",
  "زاهدان",
  "بندر عباس",
  "بوشهر",
  "گیلان",
  "ساری",
  "اردبیل",
  "ارومیه",
  "ایلام",
  "کرج",
  "بابل",
  "آبادان",
  "کیش",
  "قشم",
  "سنندج",
  "یاسوج",
  "شهرکرد",
  "کرمان",
  "کرمانشاه",
];

const TICKETS = [];

function filterTicketsBySource(list, source) {
  return list.filter((ticket) => ticket.source === source);
}

function filterTicketsByDestination(list, dest) {
  return list.filter((ticket) => ticket.destination === dest);
}

function filterTicketsByClass(list, classes) {
  return list.filter((ticket) => classes.includes(ticket.class));
}

function filterTicketsByDate(list, date) {
  return list.filter((ticket) => ticket.date.getTime() === date.getTime());
}

export function filterTickets({ source, dest, classes, date }) {
  let filteredTickets = filterTicketsBySource(TICKETS, source);
  filteredTickets = filterTicketsByDestination(filteredTickets, dest);
  filteredTickets = filterTicketsByClass(filteredTickets, classes);
  filteredTickets = filterTicketsByDate(filteredTickets, date);

  return filteredTickets;
}

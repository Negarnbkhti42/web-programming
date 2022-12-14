const SOURCE_PARAM = "source";
const DEST_PARAM = "dest";
const DATE_PARAM = "date";
const PASSENGER_PARAM = "passenger";

const AUTH_KEY = "logged";

const TICKET_STRUCTURE = (
  ticket
) => `<div class="card w-100 mb-2 theme-dependant">
  <div class="card-body">
  <div class="border-bottom d-flex pb-2">
      <div class="flight-capacity">
      ظرفیت باقی مانده: ${ticket.flight_capacity} نفر ${
  ticket.flight_capacity < 3 * searchParams.passengers
    ? '<span class="badge text-bg-danger ms-2">ظرفیت محدود</span>'
    : ""
}
      </div>
    </div>
    <div class="ticket-container">
      <div class="flight-airline">
        <img src="${AIRLINE_LOGOS[ticket.airline]}" alt="${
  ticket.airline
}" class="airline-pic" />
        <p>${AIRLINE_NAMES[ticket.airline]}</p>
      </div>
      <div
        class=" flight-location"
      >
        <div class="flight-time">
          <p class="fw-bold text-colored">${ticket.start_time}</p>
          <div class="flight-duration pb-1">
            ${ticket.duration}
          </div>
          <p class="fw-bold text-colored">${ticket.finish_time}</p>
        </div>
        <div class="flight-path">
          <div class="date-location">
            <p>${ticket.start_date}</p>
            <p class="text-colored">${ticket.source}</p>
          </div>
          <div class="date-location">
            <p>${ticket.finish_date}</p>
            <p class="text-colored">${ticket.destination}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card-footer">
  <div class="p-2">
  <a href="${
    isLogged()
      ? `./checkout.html?id=${ticket.id}`
      : `./login.html?return=${ticket.id}`
  }" class="btn btn-primary price-badge">
    <span class="badge text-bg-warning">${ticket.class}</span>
    <p>${ticket.price} تومان</p>
  </a>
</div>
  </div>
</div>`;

const CITIES = [
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
  "kish",
  "قشم",
  "سنندج",
  "یاسوج",
  "شهرکرد",
  "کرمان",
  "کرمانشاه",
];

const TICKETS = [
  {
    id: "0",
    source: "اهواز",
    destination: "قشم",
    price: "21000000",
    flight_capacity: "12",
    class: "فرست کلاس",
    start_date: "1401/11/10",
    start_time: "07:14",
    finish_date: "1401/11/10",
    finish_time: "08:25",
    duration: "1 ساعت و 11 دقیقه",
    airline: "iranair",
  },
  {
    id: "1",
    source: "کیش",
    destination: "گرگان",
    price: "7000000",
    flight_capacity: "17",
    class: "فرست کلاس",
    start_date: "1401/09/21",
    start_time: "00:06",
    finish_date: "1401/09/21",
    finish_time: "00:46",
    duration: "40 دقیقه",
    airline: "kish",
  },
  {
    id: "2",
    source: "کرمان",
    destination: "ایلام",
    price: "11000000",
    flight_capacity: "6",
    class: "اکونومی",
    start_date: "1401/11/07",
    start_time: "22:57",
    finish_date: "1401/11/08",
    finish_time: "00:24",
    duration: "1 ساعت و 27 دقیقه",
    airline: "caspain",
  },
  {
    id: "3",
    source: "ساری",
    destination: "شهرکرد",
    price: "21000000",
    flight_capacity: "18",
    class: "فرست کلاس",
    start_date: "1401/10/12",
    start_time: "12:31",
    finish_date: "1401/10/12",
    finish_time: "12:58",
    duration: "27 دقیقه",
    airline: "taban",
  },
  {
    id: "4",
    source: "قم",
    destination: "قزوین",
    price: "11000000",
    flight_capacity: "16",
    class: "بیزنس",
    start_date: "1401/11/13",
    start_time: "11:44",
    finish_date: "1401/11/13",
    finish_time: "12:06",
    duration: "22 دقیقه",
    airline: "iranair",
  },
  {
    id: "5",
    source: "کرمان",
    destination: "اصفهان",
    price: "21000000",
    flight_capacity: "8",
    class: "بیزنس",
    start_date: "1401/11/24",
    start_time: "16:22",
    finish_date: "1401/11/24",
    finish_time: "17:25",
    duration: "1 ساعت و 03 دقیقه",
    airline: "caspain",
  },
  {
    id: "6",
    source: "کرمان",
    destination: "کیش",
    price: "12000000",
    flight_capacity: "2",
    class: "بیزنس",
    start_date: "1401/10/28",
    start_time: "02:20",
    finish_date: "1401/10/28",
    finish_time: "03:07",
    duration: "47 دقیقه",
    airline: "taban",
  },
  {
    id: "7",
    source: "کرمانشاه",
    destination: "کرمان",
    price: "8000000",
    flight_capacity: "3",
    class: "فرست کلاس",
    start_date: "1401/11/15",
    start_time: "02:55",
    finish_date: "1401/11/15",
    finish_time: "04:03",
    duration: "1 ساعت و 08 دقیقه",
    airline: "taban",
  },
  {
    id: "8",
    source: "اهواز",
    destination: "ارومیه",
    price: "11000000",
    flight_capacity: "4",
    class: "اکونومی",
    start_date: "1401/09/27",
    start_time: "06:24",
    finish_date: "1401/09/27",
    finish_time: "07:43",
    duration: "1 ساعت و 19 دقیقه",
    airline: "kish",
  },
  {
    id: "9",
    source: "ساری",
    destination: "یاسوج",
    price: "22000000",
    flight_capacity: "17",
    class: "اکونومی",
    start_date: "1401/09/24",
    start_time: "05:32",
    finish_date: "1401/09/24",
    finish_time: "06:58",
    duration: "1 ساعت و 26 دقیقه",
    airline: "mahan",
  },
  {
    id: "10",
    source: "تهران",
    destination: "یاسوج",
    price: "23000000",
    flight_capacity: "17",
    class: "اکونومی",
    start_date: "1401/11/30",
    start_time: "04:07",
    finish_date: "1401/11/30",
    finish_time: "05:00",
    duration: "53 دقیقه",
    airline: "kish",
  },
  {
    id: "11",
    source: "مشهد",
    destination: "سمنان",
    price: "16000000",
    flight_capacity: "20",
    class: "بیزنس",
    start_date: "1401/11/19",
    start_time: "20:47",
    finish_date: "1401/11/19",
    finish_time: "21:32",
    duration: "45 دقیقه",
    airline: "kish",
  },
  {
    id: "12",
    source: "زنجان",
    destination: "کرمانشاه",
    price: "18000000",
    flight_capacity: "19",
    class: "فرست کلاس",
    start_date: "1401/11/15",
    start_time: "01:42",
    finish_date: "1401/11/15",
    finish_time: "02:40",
    duration: "58 دقیقه",
    airline: "mahan",
  },
  {
    id: "13",
    source: "گیلان",
    destination: "ایلام",
    price: "23000000",
    flight_capacity: "12",
    class: "بیزنس",
    start_date: "1401/11/02",
    start_time: "23:32",
    finish_date: "1401/11/02",
    finish_time: "23:53",
    duration: "21 دقیقه",
    airline: "iranair",
  },
  {
    id: "14",
    source: "ساری",
    destination: "گرگان",
    price: "8000000",
    flight_capacity: "12",
    class: "فرست کلاس",
    start_date: "1401/10/20",
    start_time: "05:21",
    finish_date: "1401/10/20",
    finish_time: "06:06",
    duration: "45 دقیقه",
    airline: "mahan",
  },
  {
    id: "15",
    source: "گرگان",
    destination: "آبادان",
    price: "14000000",
    flight_capacity: "11",
    class: "فرست کلاس",
    start_date: "1401/10/25",
    start_time: "14:26",
    finish_date: "1401/10/25",
    finish_time: "15:23",
    duration: "57 دقیقه",
    airline: "zagros",
  },
  {
    id: "16",
    source: "یاسوج",
    destination: "قشم",
    price: "20000000",
    flight_capacity: "14",
    class: "فرست کلاس",
    start_date: "1401/09/23",
    start_time: "17:28",
    finish_date: "1401/09/23",
    finish_time: "17:59",
    duration: "31 دقیقه",
    airline: "sepahren",
  },
  {
    id: "17",
    source: "قشم",
    destination: "کرمانشاه",
    price: "22000000",
    flight_capacity: "17",
    class: "اکونومی",
    start_date: "1401/11/10",
    start_time: "20:42",
    finish_date: "1401/11/10",
    finish_time: "21:52",
    duration: "1 ساعت و 10 دقیقه",
    airline: "taban",
  },
  {
    id: "18",
    source: "آبادان",
    destination: "قزوین",
    price: "23000000",
    flight_capacity: "8",
    class: "فرست کلاس",
    start_date: "1401/10/18",
    start_time: "14:24",
    finish_date: "1401/10/18",
    finish_time: "15:12",
    duration: "48 دقیقه",
    airline: "caspain",
  },
  {
    id: "19",
    source: "سنندج",
    destination: "کرمانشاه",
    price: "20000000",
    flight_capacity: "8",
    class: "فرست کلاس",
    start_date: "1401/09/16",
    start_time: "05:45",
    finish_date: "1401/09/16",
    finish_time: "06:08",
    duration: "23 دقیقه",
    airline: "mahan",
  },
  {
    id: "20",
    source: "تهران",
    destination: "آبادان",
    price: "23000000",
    flight_capacity: "17",
    class: "بیزنس",
    start_date: "1401/10/27",
    start_time: "11:28",
    finish_date: "1401/10/27",
    finish_time: "12:44",
    duration: "1 ساعت و 16 دقیقه",
    airline: "taban",
  },
  {
    id: "21",
    source: "اهواز",
    destination: "بندر عباس",
    price: "23000000",
    flight_capacity: "13",
    class: "اکونومی",
    start_date: "1401/11/19",
    start_time: "17:21",
    finish_date: "1401/11/19",
    finish_time: "18:21",
    duration: "1 ساعت",
    airline: "kish",
  },
  {
    id: "22",
    source: "کرمانشاه",
    destination: "تبریز",
    price: "21000000",
    flight_capacity: "10",
    class: "اکونومی",
    start_date: "1401/11/04",
    start_time: "22:20",
    finish_date: "1401/11/04",
    finish_time: "22:56",
    duration: "36 دقیقه",
    airline: "zagros",
  },
  {
    id: "23",
    source: "کرمان",
    destination: "ایلام",
    price: "13000000",
    flight_capacity: "14",
    class: "بیزنس",
    start_date: "1401/10/04",
    start_time: "05:39",
    finish_date: "1401/10/04",
    finish_time: "06:18",
    duration: "39 دقیقه",
    airline: "kish",
  },
  {
    id: "24",
    source: "سمنان",
    destination: "گرگان",
    price: "20000000",
    flight_capacity: "2",
    class: "بیزنس",
    start_date: "1401/11/04",
    start_time: "00:28",
    finish_date: "1401/11/04",
    finish_time: "00:50",
    duration: "22 دقیقه",
    airline: "sepahren",
  },
  {
    id: "25",
    source: "شهرکرد",
    destination: "کرج",
    price: "12000000",
    flight_capacity: "17",
    class: "فرست کلاس",
    start_date: "1401/10/24",
    start_time: "17:41",
    finish_date: "1401/10/24",
    finish_time: "19:04",
    duration: "1 ساعت و 23 دقیقه",
    airline: "taban",
  },
  {
    id: "26",
    source: "زنجان",
    destination: "سنندج",
    price: "9000000",
    flight_capacity: "20",
    class: "فرست کلاس",
    start_date: "1401/09/29",
    start_time: "06:14",
    finish_date: "1401/09/29",
    finish_time: "07:10",
    duration: "56 دقیقه",
    airline: "sepahren",
  },
  {
    id: "27",
    source: "آبادان",
    destination: "اصفهان",
    price: "19000000",
    flight_capacity: "18",
    class: "اکونومی",
    start_date: "1401/11/01",
    start_time: "11:38",
    finish_date: "1401/11/01",
    finish_time: "12:06",
    duration: "28 دقیقه",
    airline: "taban",
  },
  {
    id: "28",
    source: "کرمانشاه",
    destination: "مشهد",
    price: "22000000",
    flight_capacity: "8",
    class: "اکونومی",
    start_date: "1401/10/30",
    start_time: "23:48",
    finish_date: "1401/10/31",
    finish_time: "00:45",
    duration: "57 دقیقه",
    airline: "caspain",
  },
  {
    id: "29",
    source: "اهواز",
    destination: "بوشهر",
    price: "22000000",
    flight_capacity: "20",
    class: "اکونومی",
    start_date: "1401/10/09",
    start_time: "14:52",
    finish_date: "1401/10/09",
    finish_time: "15:51",
    duration: "59 دقیقه",
    airline: "kish",
  },
  {
    id: "30",
    source: "بندر عباس",
    destination: "قشم",
    price: "9000000",
    flight_capacity: "11",
    class: "بیزنس",
    start_date: "1401/10/16",
    start_time: "15:38",
    finish_date: "1401/10/16",
    finish_time: "16:46",
    duration: "1 ساعت و 08 دقیقه",
    airline: "mahan",
  },
  {
    id: "31",
    source: "کرمان",
    destination: "گیلان",
    price: "14000000",
    flight_capacity: "6",
    class: "اکونومی",
    start_date: "1401/10/10",
    start_time: "14:10",
    finish_date: "1401/10/10",
    finish_time: "15:33",
    duration: "1 ساعت و 23 دقیقه",
    airline: "mahan",
  },
  {
    id: "32",
    source: "زنجان",
    destination: "مشهد",
    price: "23000000",
    flight_capacity: "15",
    class: "اکونومی",
    start_date: "1401/09/27",
    start_time: "11:13",
    finish_date: "1401/09/27",
    finish_time: "12:10",
    duration: "57 دقیقه",
    airline: "taban",
  },
  {
    id: "33",
    source: "تهران",
    destination: "یاسوج",
    price: "10000000",
    flight_capacity: "10",
    class: "بیزنس",
    start_date: "1401/11/09",
    start_time: "16:14",
    finish_date: "1401/11/09",
    finish_time: "17:09",
    duration: "55 دقیقه",
    airline: "iranair",
  },
  {
    id: "34",
    source: "ایلام",
    destination: "سنندج",
    price: "23000000",
    flight_capacity: "7",
    class: "بیزنس",
    start_date: "1401/09/24",
    start_time: "04:23",
    finish_date: "1401/09/24",
    finish_time: "05:40",
    duration: "1 ساعت و 17 دقیقه",
    airline: "mahan",
  },
  {
    id: "35",
    source: "اردبیل",
    destination: "قم",
    price: "23000000",
    flight_capacity: "1",
    class: "فرست کلاس",
    start_date: "1401/11/01",
    start_time: "07:01",
    finish_date: "1401/11/01",
    finish_time: "07:38",
    duration: "37 دقیقه",
    airline: "caspain",
  },
  {
    id: "36",
    source: "کرمان",
    destination: "یاسوج",
    price: "23000000",
    flight_capacity: "3",
    class: "اکونومی",
    start_date: "1401/10/10",
    start_time: "06:29",
    finish_date: "1401/10/10",
    finish_time: "07:49",
    duration: "1 ساعت و 20 دقیقه",
    airline: "taban",
  },
  {
    id: "37",
    source: "شیراز",
    destination: "یاسوج",
    price: "20000000",
    flight_capacity: "17",
    class: "اکونومی",
    start_date: "1401/11/08",
    start_time: "09:51",
    finish_date: "1401/11/08",
    finish_time: "10:43",
    duration: "52 دقیقه",
    airline: "kish",
  },
  {
    id: "38",
    source: "اصفهان",
    destination: "بندر عباس",
    price: "9000000",
    flight_capacity: "1",
    class: "بیزنس",
    start_date: "1401/10/03",
    start_time: "13:38",
    finish_date: "1401/10/03",
    finish_time: "14:02",
    duration: "24 دقیقه",
    airline: "iranair",
  },
  {
    id: "39",
    source: "کیش",
    destination: "سمنان",
    price: "21000000",
    flight_capacity: "20",
    class: "اکونومی",
    start_date: "1401/09/30",
    start_time: "05:15",
    finish_date: "1401/09/30",
    finish_time: "06:35",
    duration: "1 ساعت و 20 دقیقه",
    airline: "taban",
  },
  {
    id: "40",
    source: "اردبیل",
    destination: "گرگان",
    price: "10000000",
    flight_capacity: "17",
    class: "بیزنس",
    start_date: "1401/09/20",
    start_time: "08:19",
    finish_date: "1401/09/20",
    finish_time: "09:31",
    duration: "1 ساعت و 12 دقیقه",
    airline: "sepahren",
  },
  {
    id: "41",
    source: "اصفهان",
    destination: "کرج",
    price: "21000000",
    flight_capacity: "2",
    class: "فرست کلاس",
    start_date: "1401/11/01",
    start_time: "12:39",
    finish_date: "1401/11/01",
    finish_time: "13:09",
    duration: "30 دقیقه",
    airline: "sepahren",
  },
  {
    id: "42",
    source: "تهران",
    destination: "مشهد",
    price: "20000000",
    flight_capacity: "11",
    class: "اکونومی",
    start_date: "1401/09/18",
    start_time: "16:38",
    finish_date: "1401/09/18",
    finish_time: "17:59",
    duration: "1 ساعت و 21 دقیقه",
    airline: "iranair",
  },
  {
    id: "43",
    source: "شیراز",
    destination: "قزوین",
    price: "17000000",
    flight_capacity: "17",
    class: "اکونومی",
    start_date: "1401/10/04",
    start_time: "17:54",
    finish_date: "1401/10/04",
    finish_time: "19:13",
    duration: "1 ساعت و 19 دقیقه",
    airline: "iranair",
  },
  {
    id: "44",
    source: "اصفهان",
    destination: "بابل",
    price: "17000000",
    flight_capacity: "10",
    class: "اکونومی",
    start_date: "1401/11/09",
    start_time: "00:36",
    finish_date: "1401/11/09",
    finish_time: "01:55",
    duration: "1 ساعت و 19 دقیقه",
    airline: "iranair",
  },
  {
    id: "45",
    source: "آبادان",
    destination: "سنندج",
    price: "20000000",
    flight_capacity: "18",
    class: "فرست کلاس",
    start_date: "1401/09/15",
    start_time: "16:56",
    finish_date: "1401/09/15",
    finish_time: "17:56",
    duration: "1 ساعت",
    airline: "taban",
  },
  {
    id: "46",
    source: "یاسوج",
    destination: "بابل",
    price: "7000000",
    flight_capacity: "15",
    class: "بیزنس",
    start_date: "1401/09/11",
    start_time: "06:23",
    finish_date: "1401/09/11",
    finish_time: "07:38",
    duration: "1 ساعت و 15 دقیقه",
    airline: "mahan",
  },
  {
    id: "47",
    source: "گرگان",
    destination: "قم",
    price: "21000000",
    flight_capacity: "15",
    class: "اکونومی",
    start_date: "1401/11/28",
    start_time: "07:36",
    finish_date: "1401/11/28",
    finish_time: "08:14",
    duration: "38 دقیقه",
    airline: "mahan",
  },
  {
    id: "48",
    source: "قزوین",
    destination: "گرگان",
    price: "23000000",
    flight_capacity: "1",
    class: "بیزنس",
    start_date: "1401/10/13",
    start_time: "23:02",
    finish_date: "1401/10/14",
    finish_time: "00:25",
    duration: "1 ساعت و 23 دقیقه",
    airline: "mahan",
  },
  {
    id: "49",
    source: "سنندج",
    destination: "بابل",
    price: "8000000",
    flight_capacity: "14",
    class: "بیزنس",
    start_date: "1401/09/15",
    start_time: "17:23",
    finish_date: "1401/09/15",
    finish_time: "17:50",
    duration: "27 دقیقه",
    airline: "caspain",
  },
  {
    id: "50",
    source: "گرگان",
    destination: "مشهد",
    price: "8000000",
    flight_capacity: "8",
    class: "اکونومی",
    start_date: "1401/09/25",
    start_time: "06:49",
    finish_date: "1401/09/25",
    finish_time: "07:50",
    duration: "1 ساعت و 01 دقیقه",
    airline: "mahan",
  },
  {
    id: "51",
    source: "قم",
    destination: "ایلام",
    price: "23000000",
    flight_capacity: "20",
    class: "اکونومی",
    start_date: "1401/11/24",
    start_time: "07:33",
    finish_date: "1401/11/24",
    finish_time: "08:21",
    duration: "48 دقیقه",
    airline: "caspain",
  },
  {
    id: "52",
    source: "اهواز",
    destination: "بابل",
    price: "12000000",
    flight_capacity: "2",
    class: "اکونومی",
    start_date: "1401/11/02",
    start_time: "01:35",
    finish_date: "1401/11/02",
    finish_time: "02:34",
    duration: "59 دقیقه",
    airline: "sepahren",
  },
  {
    id: "53",
    source: "گرگان",
    destination: "یاسوج",
    price: "18000000",
    flight_capacity: "18",
    class: "بیزنس",
    start_date: "1401/10/04",
    start_time: "06:55",
    finish_date: "1401/10/04",
    finish_time: "08:07",
    duration: "1 ساعت و 12 دقیقه",
    airline: "kish",
  },
  {
    id: "54",
    source: "شیراز",
    destination: "مشهد",
    price: "20000000",
    flight_capacity: "7",
    class: "فرست کلاس",
    start_date: "1401/10/27",
    start_time: "12:31",
    finish_date: "1401/10/27",
    finish_time: "13:59",
    duration: "1 ساعت و 28 دقیقه",
    airline: "sepahren",
  },
  {
    id: "55",
    source: "ساری",
    destination: "تهران",
    price: "15000000",
    flight_capacity: "4",
    class: "بیزنس",
    start_date: "1401/11/07",
    start_time: "20:33",
    finish_date: "1401/11/07",
    finish_time: "21:57",
    duration: "1 ساعت و 24 دقیقه",
    airline: "zagros",
  },
  {
    id: "56",
    source: "اهواز",
    destination: "بندر عباس",
    price: "20000000",
    flight_capacity: "16",
    class: "اکونومی",
    start_date: "1401/09/17",
    start_time: "00:03",
    finish_date: "1401/09/17",
    finish_time: "00:49",
    duration: "46 دقیقه",
    airline: "iranair",
  },
  {
    id: "57",
    source: "کرمان",
    destination: "قزوین",
    price: "11000000",
    flight_capacity: "2",
    class: "بیزنس",
    start_date: "1401/11/27",
    start_time: "11:21",
    finish_date: "1401/11/27",
    finish_time: "12:29",
    duration: "1 ساعت و 08 دقیقه",
    airline: "caspain",
  },
  {
    id: "58",
    source: "سمنان",
    destination: "بابل",
    price: "21000000",
    flight_capacity: "19",
    class: "فرست کلاس",
    start_date: "1401/11/02",
    start_time: "07:45",
    finish_date: "1401/11/02",
    finish_time: "08:14",
    duration: "29 دقیقه",
    airline: "iranair",
  },
  {
    id: "59",
    source: "کرمان",
    destination: "سمنان",
    price: "20000000",
    flight_capacity: "19",
    class: "بیزنس",
    start_date: "1401/11/06",
    start_time: "21:23",
    finish_date: "1401/11/06",
    finish_time: "22:42",
    duration: "1 ساعت و 19 دقیقه",
    airline: "zagros",
  },
  {
    id: "60",
    source: "یاسوج",
    destination: "اردبیل",
    price: "22000000",
    flight_capacity: "13",
    class: "اکونومی",
    start_date: "1401/11/19",
    start_time: "10:45",
    finish_date: "1401/11/19",
    finish_time: "11:55",
    duration: "1 ساعت و 10 دقیقه",
    airline: "sepahren",
  },
  {
    id: "61",
    source: "اهواز",
    destination: "بوشهر",
    price: "14000000",
    flight_capacity: "3",
    class: "بیزنس",
    start_date: "1401/10/27",
    start_time: "20:26",
    finish_date: "1401/10/27",
    finish_time: "21:00",
    duration: "34 دقیقه",
    airline: "taban",
  },
  {
    id: "62",
    source: "بوشهر",
    destination: "قم",
    price: "20000000",
    flight_capacity: "17",
    class: "بیزنس",
    start_date: "1401/10/20",
    start_time: "05:10",
    finish_date: "1401/10/20",
    finish_time: "06:37",
    duration: "1 ساعت و 27 دقیقه",
    airline: "zagros",
  },
  {
    id: "63",
    source: "کیش",
    destination: "اصفهان",
    price: "7000000",
    flight_capacity: "5",
    class: "اکونومی",
    start_date: "1401/10/26",
    start_time: "00:27",
    finish_date: "1401/10/26",
    finish_time: "01:19",
    duration: "52 دقیقه",
    airline: "iranair",
  },
  {
    id: "64",
    source: "سنندج",
    destination: "کرج",
    price: "8000000",
    flight_capacity: "13",
    class: "بیزنس",
    start_date: "1401/11/25",
    start_time: "12:07",
    finish_date: "1401/11/25",
    finish_time: "13:23",
    duration: "1 ساعت و 16 دقیقه",
    airline: "mahan",
  },
  {
    id: "65",
    source: "سنندج",
    destination: "اصفهان",
    price: "18000000",
    flight_capacity: "2",
    class: "فرست کلاس",
    start_date: "1401/11/05",
    start_time: "10:44",
    finish_date: "1401/11/05",
    finish_time: "11:22",
    duration: "38 دقیقه",
    airline: "kish",
  },
  {
    id: "66",
    source: "زنجان",
    destination: "بندر عباس",
    price: "21000000",
    flight_capacity: "11",
    class: "بیزنس",
    start_date: "1401/10/23",
    start_time: "05:41",
    finish_date: "1401/10/23",
    finish_time: "06:42",
    duration: "1 ساعت و 01 دقیقه",
    airline: "caspain",
  },
  {
    id: "67",
    source: "ارومیه",
    destination: "قم",
    price: "10000000",
    flight_capacity: "13",
    class: "اکونومی",
    start_date: "1401/10/23",
    start_time: "11:47",
    finish_date: "1401/10/23",
    finish_time: "12:10",
    duration: "23 دقیقه",
    airline: "sepahren",
  },
  {
    id: "68",
    source: "زنجان",
    destination: "ایلام",
    price: "9000000",
    flight_capacity: "19",
    class: "بیزنس",
    start_date: "1401/09/17",
    start_time: "06:39",
    finish_date: "1401/09/17",
    finish_time: "07:20",
    duration: "41 دقیقه",
    airline: "sepahren",
  },
  {
    id: "69",
    source: "زاهدان",
    destination: "تبریز",
    price: "10000000",
    flight_capacity: "3",
    class: "اکونومی",
    start_date: "1401/10/17",
    start_time: "08:33",
    finish_date: "1401/10/17",
    finish_time: "09:55",
    duration: "1 ساعت و 22 دقیقه",
    airline: "iranair",
  },
  {
    id: "70",
    source: "یاسوج",
    destination: "گرگان",
    price: "7000000",
    flight_capacity: "8",
    class: "اکونومی",
    start_date: "1401/10/15",
    start_time: "11:07",
    finish_date: "1401/10/15",
    finish_time: "11:37",
    duration: "30 دقیقه",
    airline: "sepahren",
  },
  {
    id: "71",
    source: "اردبیل",
    destination: "کرمان",
    price: "19000000",
    flight_capacity: "17",
    class: "اکونومی",
    start_date: "1401/09/11",
    start_time: "00:56",
    finish_date: "1401/09/11",
    finish_time: "01:21",
    duration: "25 دقیقه",
    airline: "iranair",
  },
  {
    id: "72",
    source: "قشم",
    destination: "کرمانشاه",
    price: "22000000",
    flight_capacity: "6",
    class: "اکونومی",
    start_date: "1401/10/20",
    start_time: "05:11",
    finish_date: "1401/10/20",
    finish_time: "05:32",
    duration: "21 دقیقه",
    airline: "iranair",
  },
  {
    id: "73",
    source: "بابل",
    destination: "تهران",
    price: "12000000",
    flight_capacity: "20",
    class: "اکونومی",
    start_date: "1401/11/29",
    start_time: "02:55",
    finish_date: "1401/11/29",
    finish_time: "03:52",
    duration: "57 دقیقه",
    airline: "taban",
  },
  {
    id: "74",
    source: "قشم",
    destination: "کرج",
    price: "21000000",
    flight_capacity: "15",
    class: "بیزنس",
    start_date: "1401/11/04",
    start_time: "22:52",
    finish_date: "1401/11/04",
    finish_time: "23:50",
    duration: "58 دقیقه",
    airline: "taban",
  },
  {
    id: "75",
    source: "بابل",
    destination: "ساری",
    price: "16000000",
    flight_capacity: "5",
    class: "بیزنس",
    start_date: "1401/11/07",
    start_time: "19:42",
    finish_date: "1401/11/07",
    finish_time: "20:51",
    duration: "1 ساعت و 09 دقیقه",
    airline: "taban",
  },
  {
    id: "76",
    source: "بابل",
    destination: "آبادان",
    price: "20000000",
    flight_capacity: "1",
    class: "بیزنس",
    start_date: "1401/09/13",
    start_time: "04:22",
    finish_date: "1401/09/13",
    finish_time: "05:48",
    duration: "1 ساعت و 26 دقیقه",
    airline: "kish",
  },
  {
    id: "77",
    source: "کرج",
    destination: "شیراز",
    price: "21000000",
    flight_capacity: "3",
    class: "اکونومی",
    start_date: "1401/10/10",
    start_time: "04:25",
    finish_date: "1401/10/10",
    finish_time: "05:09",
    duration: "44 دقیقه",
    airline: "zagros",
  },
  {
    id: "78",
    source: "تهران",
    destination: "بابل",
    price: "11000000",
    flight_capacity: "8",
    class: "بیزنس",
    start_date: "1401/10/12",
    start_time: "14:09",
    finish_date: "1401/10/12",
    finish_time: "15:29",
    duration: "1 ساعت و 20 دقیقه",
    airline: "caspain",
  },
  {
    id: "79",
    source: "کرمان",
    destination: "سنندج",
    price: "12000000",
    flight_capacity: "18",
    class: "اکونومی",
    start_date: "1401/10/20",
    start_time: "09:10",
    finish_date: "1401/10/20",
    finish_time: "09:52",
    duration: "42 دقیقه",
    airline: "kish",
  },
  {
    id: "80",
    source: "اهواز",
    destination: "بوشهر",
    price: "7000000",
    flight_capacity: "18",
    class: "بیزنس",
    start_date: "1401/11/11",
    start_time: "23:28",
    finish_date: "1401/11/12",
    finish_time: "00:36",
    duration: "1 ساعت و 08 دقیقه",
    airline: "sepahren",
  },
  {
    id: "81",
    source: "تهران",
    destination: "زنجان",
    price: "9000000",
    flight_capacity: "9",
    class: "فرست کلاس",
    start_date: "1401/10/07",
    start_time: "21:57",
    finish_date: "1401/10/07",
    finish_time: "23:04",
    duration: "1 ساعت و 07 دقیقه",
    airline: "zagros",
  },
  {
    id: "82",
    source: "مشهد",
    destination: "سمنان",
    price: "13000000",
    flight_capacity: "12",
    class: "اکونومی",
    start_date: "1401/10/15",
    start_time: "08:46",
    finish_date: "1401/10/15",
    finish_time: "09:47",
    duration: "1 ساعت و 01 دقیقه",
    airline: "iranair",
  },
  {
    id: "83",
    source: "بندر عباس",
    destination: "آبادان",
    price: "8000000",
    flight_capacity: "5",
    class: "اکونومی",
    start_date: "1401/09/30",
    start_time: "21:48",
    finish_date: "1401/09/30",
    finish_time: "22:17",
    duration: "29 دقیقه",
    airline: "mahan",
  },
  {
    id: "84",
    source: "اردبیل",
    destination: "زاهدان",
    price: "18000000",
    flight_capacity: "4",
    class: "اکونومی",
    start_date: "1401/10/02",
    start_time: "20:02",
    finish_date: "1401/10/02",
    finish_time: "21:08",
    duration: "1 ساعت و 06 دقیقه",
    airline: "taban",
  },
  {
    id: "85",
    source: "سمنان",
    destination: "ساری",
    price: "22000000",
    flight_capacity: "3",
    class: "اکونومی",
    start_date: "1401/10/19",
    start_time: "19:43",
    finish_date: "1401/10/19",
    finish_time: "20:23",
    duration: "40 دقیقه",
    airline: "iranair",
  },
  {
    id: "86",
    source: "گرگان",
    destination: "ارومیه",
    price: "16000000",
    flight_capacity: "8",
    class: "بیزنس",
    start_date: "1401/09/12",
    start_time: "19:09",
    finish_date: "1401/09/12",
    finish_time: "19:34",
    duration: "25 دقیقه",
    airline: "kish",
  },
  {
    id: "87",
    source: "سنندج",
    destination: "تهران",
    price: "20000000",
    flight_capacity: "7",
    class: "فرست کلاس",
    start_date: "1401/10/23",
    start_time: "21:34",
    finish_date: "1401/10/23",
    finish_time: "22:01",
    duration: "27 دقیقه",
    airline: "zagros",
  },
  {
    id: "88",
    source: "قم",
    destination: "سمنان",
    price: "12000000",
    flight_capacity: "7",
    class: "فرست کلاس",
    start_date: "1401/10/08",
    start_time: "06:40",
    finish_date: "1401/10/08",
    finish_time: "07:24",
    duration: "44 دقیقه",
    airline: "zagros",
  },
  {
    id: "89",
    source: "کرمان",
    destination: "کیش",
    price: "14000000",
    flight_capacity: "8",
    class: "اکونومی",
    start_date: "1401/10/23",
    start_time: "00:28",
    finish_date: "1401/10/23",
    finish_time: "01:32",
    duration: "1 ساعت و 04 دقیقه",
    airline: "iranair",
  },
  {
    id: "90",
    source: "ساری",
    destination: "ارومیه",
    price: "9000000",
    flight_capacity: "3",
    class: "بیزنس",
    start_date: "1401/09/13",
    start_time: "05:07",
    finish_date: "1401/09/13",
    finish_time: "06:16",
    duration: "1 ساعت و 09 دقیقه",
    airline: "kish",
  },
  {
    id: "91",
    source: "اصفهان",
    destination: "گرگان",
    price: "8000000",
    flight_capacity: "13",
    class: "اکونومی",
    start_date: "1401/10/27",
    start_time: "20:32",
    finish_date: "1401/10/27",
    finish_time: "21:16",
    duration: "44 دقیقه",
    airline: "iranair",
  },
  {
    id: "92",
    source: "زاهدان",
    destination: "ارومیه",
    price: "13000000",
    flight_capacity: "12",
    class: "فرست کلاس",
    start_date: "1401/09/20",
    start_time: "16:28",
    finish_date: "1401/09/20",
    finish_time: "17:32",
    duration: "1 ساعت و 04 دقیقه",
    airline: "mahan",
  },
  {
    id: "93",
    source: "شهرکرد",
    destination: "قزوین",
    price: "15000000",
    flight_capacity: "15",
    class: "فرست کلاس",
    start_date: "1401/10/12",
    start_time: "00:31",
    finish_date: "1401/10/12",
    finish_time: "01:29",
    duration: "58 دقیقه",
    airline: "sepahren",
  },
  {
    id: "94",
    source: "بندر عباس",
    destination: "قزوین",
    price: "8000000",
    flight_capacity: "9",
    class: "اکونومی",
    start_date: "1401/10/17",
    start_time: "23:18",
    finish_date: "1401/10/18",
    finish_time: "00:21",
    duration: "1 ساعت و 03 دقیقه",
    airline: "taban",
  },
  {
    id: "95",
    source: "سمنان",
    destination: "زاهدان",
    price: "11000000",
    flight_capacity: "9",
    class: "بیزنس",
    start_date: "1401/10/18",
    start_time: "19:56",
    finish_date: "1401/10/18",
    finish_time: "20:49",
    duration: "53 دقیقه",
    airline: "mahan",
  },
  {
    id: "96",
    source: "قم",
    destination: "کرمان",
    price: "14000000",
    flight_capacity: "14",
    class: "بیزنس",
    start_date: "1401/11/10",
    start_time: "12:14",
    finish_date: "1401/11/10",
    finish_time: "13:06",
    duration: "52 دقیقه",
    airline: "taban",
  },
  {
    id: "97",
    source: "زاهدان",
    destination: "یاسوج",
    price: "15000000",
    flight_capacity: "17",
    class: "فرست کلاس",
    start_date: "1401/10/31",
    start_time: "06:35",
    finish_date: "1401/10/31",
    finish_time: "07:10",
    duration: "35 دقیقه",
    airline: "taban",
  },
  {
    id: "98",
    source: "گرگان",
    destination: "شهرکرد",
    price: "12000000",
    flight_capacity: "1",
    class: "فرست کلاس",
    start_date: "1401/10/10",
    start_time: "14:32",
    finish_date: "1401/10/10",
    finish_time: "14:53",
    duration: "21 دقیقه",
    airline: "mahan",
  },
  {
    id: "99",
    source: "اهواز",
    destination: "کرمان",
    price: "19000000",
    flight_capacity: "9",
    class: "اکونومی",
    start_date: "1401/09/23",
    start_time: "16:46",
    finish_date: "1401/09/23",
    finish_time: "17:07",
    duration: "21 دقیقه",
    airline: "sepahren",
  },
];

const AIRLINE_NAMES = {
  caspain: "کاسپین",
  iranair: "ایران‌ایر",
  kish: "کیش",
  mahan: "ماهان",
  sepahren: "سپهران",
  taban: "تابان",
  zagros: "زاگرس",
};

const AIRLINE_LOGOS = {
  caspain: "./assets/flight-icons/caspian.webp",
  iranair: "./assets/flight-icons/iranair.webp",
  kish: "./assets/flight-icons/Kish.webp",
  mahan: "./assets/flight-icons/Mahan.webp",
  sepahren: "./assets/flight-icons/sepahran.webp",
  taban: "./assets/flight-icons/Taban.webp",
  zagros: "./assets/flight-icons/Zagros.webp",
};

const CLASS_COLORS = {
  اکونومی: "warning",
  بیزنس: "info",
  "فرست کلاس": "success",
};

function filterTicketsBySource(list, source) {
  if (!source) {
    return list;
  }
  return list.filter((ticket) => ticket.source === source);
}

function filterTicketsByDestination(list, dest) {
  if (!dest) {
    return list;
  }
  return list.filter((ticket) => ticket.destination === dest);
}

function filterTicketsByClass(list, ticket_class) {
  if (!ticket_class) {
    return list;
  }
  return list.filter((ticket) => ticket_class === ticket.class);
}

function filterTicketsByDate(list, date) {
  date = new Date(date);
  if (!date.getDate()) {
    return list;
  }
  return list.filter(
    (ticket) => new Date(ticket.start_date).getTime() === date.getTime()
  );
}

function filterTicketsByPassenger(list, passenger) {
  return list.filter((ticket) => ticket.flight_capacity >= passenger);
}

function filterTickets({ source, dest, classes, date, passengers }) {
  let filteredTickets = filterTicketsBySource(TICKETS, source);
  filteredTickets = filterTicketsByDestination(filteredTickets, dest);
  filteredTickets = filterTicketsByClass(filteredTickets, classes);
  filteredTickets = filterTicketsByDate(filteredTickets, date);
  filterTickets = filterTicketsByPassenger(filteredTickets, passengers);

  return filteredTickets;
}

function login() {
  localStorage.setItem(AUTH_KEY, true);
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
}

function isLogged() {
  return !!localStorage.getItem(AUTH_KEY);
}

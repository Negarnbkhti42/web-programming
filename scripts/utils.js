const TICKET_STRUCTURE = (
  ticket
) => `<div class="card w-100 theme-dependant mb-5">
<div class="card-body d-flex flex-column">
  <div class="d-flex align-items-stretch ticket">
    <div class="p-2">
      <a href="#" class="btn btn-primary price-badge">
      <span class="badge text-bg-${CLASS_COLORS[ticket.class]}">${
  ticket.class
}</span>
            <p>
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
    ${
      ticket.flight_capacity < 3 * searchParams.passengers
        ? '<span class="badge text-bg-danger ms-2">ظرفیت محدود</span>'
        : ""
    }
  </div>
</div>
</div>`;

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

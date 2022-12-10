jalaliDatepicker.startWatch({
  minDate: "attr",
  maxDate: "attr",
});

document.querySelectorAll("[data-jdp]").forEach((item) => {
  item.addEventListener("keydown", (event) => event.preventDefault());
});

function showOptions(event, optionField) {
  const value = event.target.value.trim().toLowerCase();
  optionField.innerHTML = "";
  optionField.hidden && (optionField.hidden = false);

  const filteredCities = CITIES.filter((city) => city.includes(value));

  filteredCities.forEach((city) => {
    const option = document.createElement("div");
    option.innerHTML = city;
    optionField.appendChild(option);
  });
}

const AUTOCOMPLETES = document.querySelectorAll(".autocomplete");

AUTOCOMPLETES.forEach((autocomplete) => {
  const input = autocomplete.querySelector("input");
  const optionField = autocomplete.querySelector(".options");

  input.addEventListener("focus", function (e) {
    showOptions(e, optionField);
  });

  input.addEventListener("input", function (e) {
    showOptions(e, optionField);
  });
  input.addEventListener("blur", function () {
    optionField.hidden = true;
  });
});

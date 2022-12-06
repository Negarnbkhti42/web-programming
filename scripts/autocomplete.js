function showOptions(event, optionField) {
  const value = event.target.value.trim().toLowerCase();
  optionField.innerHTML = "";
  optionField.hidden && (optionField.hidden = false);

  const filteredCities = CITIES.filter((city) => city.includes(value));

  filteredCities.forEach((city) => {
    const option = document.createElement("li");
    option.classList.add("list-group-item");
    option.innerHTML = city;
    option.addEventListener("click", () => {
      this.value = city;
      optionField.hidden = true;
    });
    optionField.appendChild(option);
  });
}

const AUTOCOMPLETES = document.querySelectorAll(".autocomplete");

AUTOCOMPLETES.forEach((autocomplete) => {
  const input = autocomplete.querySelector("input");
  const optionField = autocomplete.querySelector(".options");

  const displayOptions = showOptions.bind(input);

  input.addEventListener("focus", function (e) {
    displayOptions(e, optionField);
  });

  input.addEventListener("input", function (e) {
    displayOptions(e, optionField);
  });
});

document.addEventListener("click", function (event) {
  AUTOCOMPLETES.forEach((option) => {
    const list = option.querySelector(".options");
    if (
      !(
        list.hidden ||
        list.contains(event.target) ||
        option.contains(event.target)
      )
    ) {
      list.hidden = true;
    }
  });
});

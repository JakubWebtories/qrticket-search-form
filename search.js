// Submit form
let submitForm = document.querySelector("#search-form");

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Combobox values - type event
  const selectedTypeEvents = document.querySelectorAll("#selected-items option");
  const valuesTypeEvents = Array.from(selectedTypeEvents).map(type => type.value)

  // Dates - stard and end
  const dateStart = document.querySelector("#date-start").value;
  const dateEnd = document.querySelector("#date-start").value;

  // Location
  const location = document.querySelector('#location').value;

  // Send object
  const data = {
    typesEvent: valuesTypeEvents,
    dateStart: dateStart,
    dateEnd: dateEnd,
    location: location
  };

  fetch("http://localhost:3000/formData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Multiple selection - type events
const selectElement = document.querySelector("#type-event");
const selectedItemsWrapper = document.querySelector("#selected-items");
let selectedItemsValues = document.querySelectorAll("#type-event option");


selectedItemsValues.forEach((item) => {
  item.addEventListener('click', function(){
    let cloneOption = this.cloneNode(true)
    selectedItemsWrapper.appendChild(cloneOption)

    // Call function which updates selected items
    selectedItemsEvent();
  })
})

// Handle delete item - type events
function selectedItemsEvent () {
  let selectedItems = document.querySelectorAll("#selected-items option");
  selectedItems.forEach((selectedItem) => {
    console.log(selectedItem)
    selectedItem.addEventListener('click', function(e) {
      e.target.remove();
    })
  })
}

// Dropdown
let dropdown = document.querySelector('#search-form .dropdown-search-type')

dropdown.addEventListener('click', function() {
  selectElement.classList.toggle('active-dropdown')
})
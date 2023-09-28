let submitForm = document.querySelector("#search-form");

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const date = document.querySelector("#date").value;
  const location = document.querySelector("#location").value;
  const price = document.querySelector("#price").value;

  const data = {
    name: name,
    date: date,
    location: location,
    price: price,
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

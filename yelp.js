

let apiKey =
  "N6jC9hEJzTF9RnctCg_sNYHsnJeGGqXljv7PadDwa9cnNkH1l-dyPYCqUZ3j6JFyEBP9kfiiGvNbjdGloQd-0trLXbfSMkA69e1gvRnJM3q5ps_T1Z7-yZxkWg7dYHYx";

fetch("https://api.yelp.com/v3/businesses/search?location=Cleveland&radius=40000", {
  headers: new Headers({
    Authorization: "Bearer " + apiKey,
  }),
  method: "GET",
})
.then((response) => response.json())
.then((data) => console.log(data));

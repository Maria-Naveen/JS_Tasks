const apiURL = "https://jsonplaceholder.typicode.com/posts";

fetch(apiURL)
.then(response => response.json()).then(data => console.log(data))
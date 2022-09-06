function performRequest() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const response = this.responseText;
    document.getElementById("demo").innerHTML = response;
  }
  xhttp.open("GET", "https://ghibliapi.herokuapp.com/films/");
  xhttp.send();
}

  // const json = JSON.parse(response);
  // console.log(json);
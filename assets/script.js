


function call(){

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=RuF8zByJG0tfDn2lmH2r4kVsKgs9Grs7&rating=" + rating + "&limit=" + gifAmount;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

}

var species = ["Fish", "Reptiles", "Tigers", "Giraffes", "Bears", "Frogs", "Rhinos", "Lions", "Monkeys", "Penguins"];
var rating = "G";
var gifAmount = 10;




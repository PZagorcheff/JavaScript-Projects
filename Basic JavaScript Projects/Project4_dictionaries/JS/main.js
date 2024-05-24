

function Car() {
var Vehicle = { //Start of KVP
  Type: "Car",
  Color: "Red",
  Make: "Dodge",
  Model: "Charger",
  Year: 1968
};
delete Vehicle.Type; //Delete function
document.getElementById("Dictionary").innerHTML = Vehicle.Type;
}
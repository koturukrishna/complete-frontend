let place = "Kamareddy";

function getDetails() {
  let location = "HYD";
  console.log(location);
  console.log("Global Var Place", place);
}

if (true) {
  const name = "Krishna";
  console.log(name);
}
// console.log("block var", location); not access the  functional scope variables

console.log("Accessing global Var outside", place);

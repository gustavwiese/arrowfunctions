"use strict";

let count = 0;

window.addEventListener("load", start);

document.querySelector("#btn").addEventListener("click", function clickButton() {
  count++;
  console.log("Clicks " + count);
});

function start() {
  console.log("JavaScript kører");

  console.log(houseFilter("gryffindor"));
}

function isGryffindor(student) {
  return student.house.toLowerCase() == "gryffindor";
}

function isNotGryffindor(student) {
  return student.house.toUpperCase() !== "GRYFFINDOR";
}

function hasLastName(student, lastName) {
  return student.lastName.toLowerCase().trim() == lastName;
}

const houseFilter = (house) => liste.filter((student) => student.house.toLowerCase() === house.toLowerCase());

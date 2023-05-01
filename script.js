"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører");

  console.log(isGryffindor(liste[0]));
  console.log(isNotGryffindor(liste[0]));
  console.log(hasLastName(liste[0], "potter"));
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

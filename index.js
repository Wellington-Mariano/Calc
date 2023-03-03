"use strict";
const result_el = document.getElementById("result");
//OBJECT CONTAINING ALL OPERATIONS IN THIS CALCULATOR

const calc_obj = {
  operations: {
    addition: function (input_one, input_two) {
      return input_one + input_two;
    },
    subtraction: function (input_one, input_two) {
      return input_one - input_two;
    },
    multiplication: function (input_one, input_two) {
      return input_one * input_two;
    },
    division: function (input_one, input_two) {
      return input_one / input_two;
    },
  },
};

let result = 0; // initiazling var to receive all

let num1par, num2par;

function getVals() {
  const num = document.getElementById("number_input--1").value;
  num1par = parseInt(num);
  const num2 = document.getElementById("number_input--2").value;
  num2par = parseInt(num);
  return num1par, num2par; // assign  it to the other functions so the values are updated
}

function addition() {
  getVals();
  result = calc_obj.operations.addition(num1par, num2par  );
  result_el.textContent = result;
  
}

function subtraction() {
  getVals();
  result = calc_obj.operations.subtraction(num1par, num2par);
  result_el.textContent = result;
}

function multiplication() {
  getVals();
  result = calc_obj.operations.multiplication(num1par, num2par);
  result_el.textContent = result;
}
function division() {
  getVals();

  result = calc_obj.operations.division(num1par, num2par);
  result_el.textContent = result;
}

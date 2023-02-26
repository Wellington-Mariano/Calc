"use strict";

const result_el = document.getElementById("result");
const sum_button = document.querySelector(".addition");
const sub_button = document.getElementById("subtraction--btn");
const mul_button = document.getElementById("multiplication--btn");
const div_button = document.getElementById("division--btn");
//OBJECT CONTAINING ALL OPERATIONS IN THIS CALCULATOR
const calc_obj = {
  operations: {
    addition: function (input_one, input_two) {
      return result = input_one + input_two;
    },
    subtraction: function (input_one, input_two) {
      return input_one - input_two;
    },
    multiplication: function (input_one, input_two) {
        return input_one * input_two;
    },
    division: function (input_one, input_two) {
        return input_one / input_two;
    }
  }
};

let result = 0;// initiazling var to receive all result

sum_button.addEventListener("click", function () {
  const num = Number(document.getElementById("number_input--1").value);
  const num2 = Number(document.getElementById("number_input--2").value);
  result = calc_obj.operations.addition(num, num2);
  result_el.textContent = result;
});

sub_button.addEventListener("click", function () {
  const num = Number(document.getElementById("number_input--1").value);
  const num2 = Number(document.getElementById("number_input--2").value);
  result = calc_obj.operations.subtraction(num, num2);
  result_el.textContent = result;
});

mul_button.addEventListener("click", function () {
  const num = Number(document.getElementById("number_input--1").value);
  const num2 = Number(document.getElementById("number_input--2").value);
  result = calc_obj.operations.multiplication(num, num2);
  result_el.textContent = result;
});

div_button.addEventListener("click", function () {
  const num = Number(document.getElementById("number_input--1").value);
  const num2 = Number(document.getElementById("number_input--2").value);
  result = calc_obj.operations.division(num, num2);
  result_el.textContent = result;
});

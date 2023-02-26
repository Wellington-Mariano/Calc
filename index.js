'use strict'
const result_el = document.getElementById("result");
const sum_button = document.querySelector(".addition");
const sub_button = document.getElementById("subtraction--btn")
const mul_button = document.getElementById("multiplication--btn")
const div_button = document.getElementById("division--btn")

const addition = function(input_one, input_two){   
    return input_one + input_two;
}

const subtraction = function(input_one, input_two){   
    return input_one - input_two;
}

const multiplication = function(input_one, input_two){
    return input_one *  input_two;
}

const division = function(input_one, input_two){
    return input_one /  input_two;
}

sum_button.addEventListener('click', function(){
    const num = Number(document.getElementById("number_input--1").value);
    const num2 = Number(document.getElementById("number_input--2").value);

    const sum = addition(num, num2);
    result_el.textContent = sum;
})

sub_button.addEventListener('click', function(){
    const num = Number(document.getElementById("number_input--1").value);
    const num2 = Number(document.getElementById("number_input--2").value);
    
    const sum = subtraction(num, num2);
    result_el.textContent = sum;
})

mul_button.addEventListener('click', function(){
    const num = Number(document.getElementById("number_input--1").value);
    const num2 = Number(document.getElementById("number_input--2").value);
    
    const sum = multiplication(num, num2);
    result_el.textContent = sum;
})

div_button.addEventListener('click', function(){
    const num = Number(document.getElementById("number_input--1").value);
    const num2 = Number(document.getElementById("number_input--2").value);
    
    const sum = division(num, num2);
    result_el.textContent = sum;
})


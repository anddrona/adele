'use strict'

let questions = $('.questions');

let input = $('input');
let good1 = input[1];
let good2 = input[3];
let good3 = input[6];
let good4 = input[8];
let good5 = input[11];
let good6 = input[15];
let good7 = input[17];
let good8 = input[20];
let good9 = input[22];
let good10 = input[26];

let label = $('label');


$('#button').click(function (e) {
    let result_value=0;

    e.preventDefault();

if (good1.checked){
    result_value = result_value+1;
}

if (good2.checked){
    result_value = result_value+1;
}
if (good3.checked){
    result_value = result_value+1;
}
if (good4.checked){
    result_value = result_value+1;
}
if (good5.checked){
    result_value = result_value+1;
}
if (good6.checked){
    result_value = result_value+1;
}
if (good7.checked){
    result_value = result_value+1;
}
if (good8.checked){
    result_value = result_value+1;
}
if (good9.checked){
    result_value = result_value+1;
}
if (good10.checked){
    result_value = result_value+1;
}
if(result_value >= 4){
    alert("Тест пройден! Правильных ответов " + result_value + " из 10.");
}else {
    alert("Тест не пройден!:( Правильных ответов " + result_value + " из 10.");
}

});

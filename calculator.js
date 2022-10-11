"use strict";
function calc() {
    let form = document.forms.calculator;
    let a = form.elements.price;
    let b = form.elements.count;
    let a0 = form.elements.price0;
    let b0 = form.elements.count0;
    let a1 = form.elements.price1;
    let b1 = form.elements.count1;
    let a2 = form.elements.price2;
    let b2 = form.elements.count2;
    let a3 = form.elements.price3;
    let b3 = form.elements.count3;
    let a4 = form.elements.price4;
    let b4 = form.elements.count4;
    let a5 = form.elements.price5;
    let b5 = form.elements.count5;
    let a6 = form.elements.price6;
    let b6 = form.elements.count6;
    let a7 = form.elements.price7;
    let b7 = form.elements.count7;
    let a8 = form.elements.price8;
    let b8 = form.elements.count8;
    let result = document.getElementById("result");
    const regul=/^[1-9][0-9]*$/;
    let r=0;
    for(let i=0;i<n;i++){
        let price=form.elements['price'+i].value;
        let count=form.elements['count' + i].value;
        if (!price.match(regul)){
           result.innerHTML = "Сотри и напиши нормально";
           break;
       }
        r+=form.elements['price'+i].value*form.elements['count' + i].value;
    }
    result.innerHTML ="Ваш заказ стоит: " + r + " рублей";
}
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

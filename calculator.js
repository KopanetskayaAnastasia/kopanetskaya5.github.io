"use strict";
function calc() {
    let form = document.forms.calculator;
    let result = document.getElementById("result");
    const regul=/^[1-9][0-9]*$/;
    let r=0;
    for(let i=0;i<8;i++){
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

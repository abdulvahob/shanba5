
let elorderQuestion = document.querySelectorAll('#order-question-1 label')
let orderQuestionText = document.querySelectorAll('#order-question-1  .question-content-heading')
let elPlan = document.querySelector('#plan-1')

elorderQuestion.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan.innerText = orderQuestionText[index].innerText
   })
})

let elorderQuestion2 = document.querySelectorAll('#order-question-2 label')
let orderQuestionText2 = document.querySelectorAll('#order-question-2  .question-content-heading')
let elPlan2 = document.querySelector('#plan-2')

elorderQuestion2.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan2.innerText = orderQuestionText2[index].innerText
   })
})




let elorderQuestion3 = document.querySelectorAll('#order-question-3 label')
let orderQuestionText3 = document.querySelectorAll('#order-question-3  .question-content-heading')
let elPlan3 = document.querySelector('#plan-3')

elorderQuestion3.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan3.innerText = orderQuestionText3[index].innerText
   })
})


let elorderQuestion4 = document.querySelectorAll('#order-question-4 label')
let orderQuestionText4 = document.querySelectorAll('#order-question-4  .question-content-heading')
let elPlan4 = document.querySelector('#plan-4')

elorderQuestion4.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan4.innerText = orderQuestionText4[index].innerText
   })
})

let elorderQuestion5 = document.querySelectorAll('#order-question-5 label')
let orderQuestionText5 = document.querySelectorAll('#order-question-5  .question-content-heading')
let elPlan5 = document.querySelector('#plan-5')

elorderQuestion5.forEach(function (item, index) {
   item.addEventListener('click', function () {
      elPlan5.innerText = orderQuestionText5[index].innerText
   })
})



let orderDown = document.querySelectorAll('.order-card-heading')
let orderDownIcon = document.querySelectorAll('.order-card-heading i')
let orderQuestion = document.querySelectorAll(".order-question")



orderDown.forEach(function (item, index) {
   item.addEventListener('click', function () {
      orderQuestion[index].classList.toggle('open')
      orderDownIcon[index].classList.toggle('fa-angle-up')
   })
})

let modal = document.querySelector('.modal')
let mainBtn = document.querySelector('.btn-close')
let btnClose = document.querySelector('.btn-Checkout')

mainBtn.addEventListener('click', function (e) {
   e.preventDefault()
   modal.classList.add('open')
})


btnClose.addEventListener('click', function () {
   modal.classList.remove('open')
})


let modalText = document.querySelector('.modal-content-order')
let orderText = document.querySelector('.order-summary-text')
console.log(modalText);
console.log(orderText);

modalText.innerHTML = orderText.innerHTML;
orderText.addEventListener('unload', function () {
   modalText.innerHTML = orderText.innerHTML;
})
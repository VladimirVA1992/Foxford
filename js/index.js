let card = document.querySelectorAll (".card");
let cardInBasket = [];

for (let i of card) {
    i.onclick = function(event) {
        let target = event.target;
        let currentCard = target.closest ('.card');
        let currentNumber = currentCard.getAttribute('date-number');
        
        if (cardInBasket.includes(currentNumber)) {
            removeNewClass (target);
            cardInBasket.splice(cardInBasket.indexOf(currentNumber),1);            
        } else {
            cardInBasket.push(currentNumber);
            addNewClass (target);
        }       

        if (target.tagName != 'BUTTON') return;
      
       let quantity = document.getElementById("quantity");
       quantity.innerText = cardInBasket.length; 
    };
}

function addNewClass (target) {
    let currentCard = target.closest ('.card');
    let discipline = currentCard.querySelector ('.card__discipline');
    let title = currentCard.querySelector ('.card__title');
    let info = currentCard.querySelector ('.info');
    let basket = currentCard.querySelector ('.notinbasket');

    let btn = currentCard.querySelector ('.btn');
    let btnText = "Удалить из заявки";

    discipline.classList.toggle ('transparency');
    title.classList.toggle ('transparency');
    info.classList.toggle ('transparency');
    basket.classList.toggle ('inbasket');

    btn.classList.toggle ('btninbasket');
    btn.innerText = btnText;
}

function removeNewClass (target) {
    let currentCard = target.closest ('.card');
    let discipline = currentCard.querySelector ('.card__discipline');
    let title = currentCard.querySelector ('.card__title');
    let info = currentCard.querySelector ('.info');
    let basket = currentCard.querySelector ('.notinbasket');

    let btn = currentCard.querySelector ('.btn');
    let btnText = "Добавить";

    discipline.classList.toggle ('transparency');
    title.classList.toggle ('transparency');
    info.classList.toggle ('transparency');
    basket.classList.toggle ('inbasket');

    btn.classList.toggle ('btninbasket');
    btn.innerText = btnText;
}
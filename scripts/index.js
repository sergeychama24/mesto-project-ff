const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');
function createCard(initialCards, deleteCard) {
    initialCards.forEach(function (element) {
        const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);
        cardElement.querySelector('.card__title').textContent = element.name;
        cardElement.querySelector('.card__image').src = element.link;
        cardElement.querySelector('.card__image').alt = element.name;
        cardElement.querySelector('.card__delete-button').addEventListener('click', function() {
          deleteCard(cardElement)
        } );
        cardList.append(cardElement);
    })
}
function deleteCard(cardElement) {
    cardElement.remove()
}

createCard(initialCards, deleteCard);
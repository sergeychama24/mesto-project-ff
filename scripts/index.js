const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');
function createCard(initialCards, deleteCard) {
    initialCards.forEach(function (element) {
        const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

        const cardTitle = cardElement.querySelector('.card__title')
        cardTitle.textContent = element.name;

        const cardImageSource = cardElement.querySelector('.card__image');
        cardImageSource.src = element.link;

        const cardImageAlt = cardElement.querySelector('.card__image')
        cardImageAlt.alt = element.name;

        const cardDeleteButton = cardElement.querySelector('.card__delete-button')
        cardDeleteButton.addEventListener('click', function() {
          deleteCard(cardElement)
        } );

        cardList.append(cardElement);
    })
}
function deleteCard(cardElement) {
    cardElement.remove()
}

createCard(initialCards, deleteCard);
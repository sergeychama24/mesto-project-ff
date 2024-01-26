const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(dataCard, deleteCard) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;

    const cardTitle = cardElement.querySelector('.card__title')
    cardTitle.textContent = dataCard.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function() {
          deleteCard(cardElement)
        });

    return cardElement
}

function deleteCard(cardElement) {
    cardElement.remove()
}

initialCards.forEach((element) => {
    const card = createCard(element, deleteCard);

    cardList.append(card);
})

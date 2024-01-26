const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(cardTemplate, deleteCard) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardElement.link;
    cardImage.alt = cardElement.name;

    const cardTitle = cardElement.querySelector('.card__title')
    cardTitle.textContent = cardElement.name;

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
    const card = createCard(cardTemplate, deleteCard);

    card.querySelector('.card__title').textContent = element.name;

    const cardImage = card.querySelector('.card__image');
    cardImage.src = element.link;
    cardImage.alt = element.name;

    cardList.append(card);
})


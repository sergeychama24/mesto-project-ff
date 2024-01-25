const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(cardTemplate, deleteCard) {
        const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

        const cardDeleteButton = cardElement.querySelector('.card__delete-button');
        cardDeleteButton.addEventListener('click', function() {
          deleteCard(cardElement)
        });
        cardDeleteButton.removeEventListener('click', function() {
            deleteCard(cardElement)
        })

        return cardElement
}

function deleteCard(cardElement) {
    cardElement.remove()
}

initialCards.forEach((element) =>{
    const card = createCard(cardTemplate, deleteCard);

    const cardImage = card.querySelector('.card__image');
    cardImage.src = element.link;
    cardImage.alt = element.name;

    const cardTitle = card.querySelector('.card__title')
    cardTitle.textContent = element.name;

    cardList.append(card);
})
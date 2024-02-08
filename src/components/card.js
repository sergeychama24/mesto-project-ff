const cardTemplate = document.querySelector('#card-template').content;
export const cardList = document.querySelector('.places__list');

export function createCard(dataCard, deleteCard) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = dataCard.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    return cardElement
}

export function deleteCard(cardElement) {
    cardElement.remove();
}
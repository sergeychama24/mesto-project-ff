const cardTemplate = document.querySelector('#card-template').content;

export function createCard(dataCard, deleteCard, addLikeHandler) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = dataCard.name;

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function () {
        addLikeHandler(likeButton)
    })

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    return cardElement
}

export function deleteCard(cardElement) {
    cardElement.remove();
}

export function addLikeHandler(cardElement) {
    cardElement.classList.toggle('card__like-button_is-active');
}
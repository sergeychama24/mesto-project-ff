import {openModal} from "./modal";

const cardTemplate = document.querySelector('#card-template').content;

export function createCard(dataCard, deleteCard) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = dataCard.name;

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function () {
       LikeHandler(likeButton)
    })

    cardImage.addEventListener('click', function(){
        openCard(cardElement)
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

function LikeHandler(cardElement) {
    cardElement.classList.toggle('card__like-button_is-active');
}

function openCard(cardElement) {
    const imageTypePopup = document.querySelector('.popup_type_image');
    const popupTitle = document.querySelector('.popup__caption');
    const popupImage = document.querySelector('.popup__image');
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    popupTitle.textContent = cardTitle.textContent;
    popupImage.src = cardImage.src;
    openModal(imageTypePopup);
}
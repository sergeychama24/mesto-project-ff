import {openModal} from "./modal";
import {showImagePopup, imagePopupTitle, imagePopupImage} from '../index'
import {deleteCardRequest, addLike} from "./api";

const cardTemplate = document.querySelector('#card-template').content;

export function createCard(dataCard, deleteCard, likeCard, openCard, userId) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = dataCard.name;

    const cardLikes = cardElement.querySelector('.card__like-counter');
    cardLikes.textContent = dataCard.likes !== undefined ? dataCard.likes.length : 0;

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function () {
        likeCard(likeButton)
    })

    cardImage.addEventListener('click', function(){
        openCard(cardElement)
    })

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    if (dataCard.owner !== undefined) {
        if (dataCard.owner._id !== userId) {
            cardDeleteButton.remove()
        }
    }

    cardDeleteButton.addEventListener('click', function() {
        deleteCardRequest(dataCard._id)
        deleteCard(cardElement)
    });


    return cardElement
}

export function deleteCard(cardElement) {
    cardElement.remove();
}

export function likeCard(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

export function openCard(cardElement) {
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    imagePopupTitle.textContent = cardTitle.textContent;
    imagePopupImage.src = cardImage.src;
    imagePopupImage.alt = cardImage.alt;
    openModal(showImagePopup);
}
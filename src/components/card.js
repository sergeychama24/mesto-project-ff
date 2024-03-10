import {openModal} from "./modal";
import {showImagePopup, imagePopupTitle, imagePopupImage} from '../index'
import {deleteCardRequest, addLikeRequest, removeLikeRequest} from "./api";

const cardTemplate = document.querySelector('#card-template').content;

export function createCard(dataCard, deleteCard, likeCard, openCard, userId) {
    const cardElement= cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = dataCard.name;

    //Проверка на рендер кнопки удаления у карточки пользователя
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    if (dataCard.owner._id !== userId) {
        cardDeleteButton.remove()
    }

    //Получение и отображение количества лайков у карточки
    const likesCounter = cardElement.querySelector('.card__like-counter');
    likesCounter.textContent = dataCard.likes.length;

    //Добавление обработчика на постановку и снятие лайка
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function () {
        likeCard(likeButton, dataCard, userId, likesCounter)
    })

    //Проверка на уже поставленый лайк пользователем для рендера
    if (dataCard.likes !== undefined) {
        if (dataCard.likes.some(like => like._id === userId)) {
        likeButton.classList.add('card__like-button_is-active');
        }
    }

    //Добавление обработчика на открытие попаппа карточки
    cardImage.addEventListener('click', function(){
        openCard(cardElement)
    })

    //Добавление обработчика на удаление карточки
    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement, dataCard)
    });

    return cardElement
}

//Функция удаления карточки
export function deleteCard(cardElement, dataCard) {
    deleteCardRequest(dataCard._id)
        .then(cardElement.remove())
}

export function likeCard(likeButton, dataCard, userId, likesCounter) {
    if (likeButton.classList.contains('card__like-button_is-active')) {
        removeLikeRequest(dataCard._id)
            .then(card => {
                likeButton.classList.toggle('card__like-button_is-active');
                likesCounter.textContent = card.likes.length;
            })
            .catch(err => console.log(err.message));
    } else {
        addLikeRequest(dataCard._id)
            .then(card => {
                likeButton.classList.toggle('card__like-button_is-active');
                likesCounter.textContent = card.likes.length;
            })
            .catch(err => console.error(err));
    }
}

export function openCard(cardElement) {
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    imagePopupTitle.textContent = cardTitle.textContent;
    imagePopupImage.src = cardImage.src;
    imagePopupImage.alt = cardImage.alt;
    openModal(showImagePopup);
}
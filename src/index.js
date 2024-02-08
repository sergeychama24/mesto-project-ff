import './pages/index.css'
import {initialCards} from "./components/cards";
import {createCard, addLikeHandler, deleteCard} from "./components/card";
import {openModal, closeModal} from "./components/modal"

const cardList = document.querySelector('.places__list');

initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, deleteCard, addLikeHandler);
    cardList.append(card);
})

const closePopUp = document.querySelectorAll('.popup__close')

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopUp = document.querySelector('.popup_type_edit');

editProfileButton.addEventListener('click', () => {
    openModal(editProfilePopUp);
})

closePopUp[0].addEventListener('click', () => {
    closeModal(editProfilePopUp)
})

const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopUp = document.querySelector('.popup_type_new-card');

addNewCardButton.addEventListener('click', () => {
    openModal(addNewCardPopUp);
})

closePopUp[1].addEventListener('click', () => {
    closeModal(addNewCardPopUp)
})

const cardImage = document.querySelectorAll('.card__image')
const imagePopUp = document.querySelector('.popup_type_image')

cardImage.forEach((image) => {
    image.addEventListener('click', () => {
        openModal(imagePopUp);
    })
})

closePopUp[2].addEventListener('click', () => {
    closeModal(imagePopUp)
})




import './pages/index.css'
import {initialCards} from "./components/cards";
import {createCard, addLikeHandler, deleteCard} from "./components/card";
import {openModal, closeModal} from "./components/modal"

const cardList = document.querySelector('.places__list');

initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, deleteCard, addLikeHandler);
    cardList.append(card);
})


// Добавялем слуштелей событий на кнопки
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');

openModal(editProfileButton, editProfilePopup);


const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_type_new-card');

openModal(addNewCardButton, addNewCardPopup);

const cardImages = document.querySelectorAll('.card__image');
const imagePopup = document.querySelector('.popup_type_image')

cardImages.forEach((img) => {
    openModal(img, imagePopup)
});

const popUpCloseButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');

popUpCloseButtons.forEach((el) => {
    closeModal(el,popups);
})












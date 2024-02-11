import './pages/index.css'
import {initialCards} from "./components/cards";
import {createCard, deleteCard, likeCard, openCard} from "./components/card";
import {openModal, closeModal, changeProfileInfo, addNewCard} from "./components/modal"



export const cardList = document.querySelector('.places__list');
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

export const editProfileForm = document.forms['edit-profile'];
const editProfilePopup = document.querySelector('.popup_type_edit');
const editProfileButton = document.querySelector('.profile__edit-button');


const addNewCardForm = document.forms['new-place'];
const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_type_new-card');

export const imagePopup = document.querySelector('.popup_type_image');
export const popupTitle = document.querySelector('.popup__caption');
export const popupImage = document.querySelector('.popup__image');

const closeButtons = document.querySelectorAll('.popup__close');

initialCards.forEach((dataCard) => {
    const newCard = createCard(dataCard, deleteCard, likeCard, openCard);
    cardList.append(newCard);
})

editProfileButton.addEventListener('click', () => {
    openModal(editProfilePopup)
});

addNewCardButton.addEventListener('click', () => openModal(addNewCardPopup));

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closeModal(popup));
});

changeProfileInfo(editProfileForm, editProfilePopup);
addNewCard(addNewCardForm, addNewCardPopup);

import './pages/index.css'
import {initialCards} from "./components/cards";
import {createCard, deleteCard, likeCard, openCard} from "./components/card";
import {openModal, closeModal, changeProfileInfo, addNewCard} from "./components/modal"

const cardList = document.querySelector('.places__list');
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_type_new-card');
const closeButtons = document.querySelectorAll('.popup__close');
const editProfileForm = document.forms['edit-profile'];
const addNewCardForm = document.forms['new-place'];

initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, deleteCard, likeCard, openCard);
    cardList.append(card);
})

editProfileButton.addEventListener('click', () => openModal(editProfilePopup));
addNewCardButton.addEventListener('click', () => openModal(addNewCardPopup));
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closeModal(popup));
});

changeProfileInfo(editProfileForm, editProfilePopup);
addNewCard(addNewCardForm, addNewCardPopup);
import './pages/index.css'
import {initialCards} from "./components/cards";
import {createCard, deleteCard} from "./components/card";
import {openModal, closeModal, changeProfileInfo, addNewCard} from "./components/modal"

const cardList = document.querySelector('.places__list');

initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, deleteCard);
    cardList.append(card);
})

// Добавялем слуштелей событий на кнопки
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_type_new-card');
const editCloseButton = editProfilePopup.querySelector('.popup__close');
const addNewCloseButton = addNewCardPopup.querySelector('.popup__close');

editProfileButton.addEventListener('click', () => openModal(editProfilePopup));
addNewCardButton.addEventListener('click', () => openModal(addNewCardPopup));

editCloseButton.addEventListener('click', () => closeModal(editProfilePopup));
addNewCloseButton.addEventListener('click', () => closeModal(addNewCardPopup));


const editProfileForm = document.forms['edit-profile'];
changeProfileInfo(editProfileForm, editProfilePopup);

const addNewCardForm = document.forms['new-place'];
addNewCard(addNewCardForm, addNewCardPopup);



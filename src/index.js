import './pages/index.css'
import {initialCards} from "./components/cards";
import {createCard, addLikeHandler, deleteCard} from "./components/card";
import {openModal, closeModal, changeProfileInfo} from "./components/modal"

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


const editProfileForm = document.forms['edit-profile'];
changeProfileInfo(editProfileForm, editProfilePopup);

const addNewCardForm = document.forms['new-place'];
const placeNameInput = addNewCardForm.elements['place-name'];
const urlInput = addNewCardForm.elements.link;

function handleAddNewCard(evt) {
    evt.preventDefault();

    let dataCard =
        {
            name: placeNameInput.value,
            link: urlInput.value,
        }

    const card = createCard(dataCard, deleteCard, addLikeHandler);
    cardList.prepend(card);

    placeNameInput.value = ''
    urlInput.value = ''

    addNewCardPopup.classList.remove('popup_is-opened')
}

addNewCardForm.addEventListener('submit', handleAddNewCard);
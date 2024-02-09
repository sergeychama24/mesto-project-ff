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

const formElement = document.forms['edit-profile'];
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    const nameDisplay = document.querySelector('.profile__title');
    const jobDisplay = document.querySelector('.profile__description');

    nameDisplay.textContent = nameValue;
    jobDisplay.textContent = jobValue;

    editProfilePopup.classList.remove('popup_is-opened')

}

formElement.addEventListener('submit', handleFormSubmit);









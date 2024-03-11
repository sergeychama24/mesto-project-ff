import './pages/index.css'
import {createCard, deleteCard, likeCard} from "./components/card";
import {openModal, closeModal} from "./components/modal";
import {clearValidation, enableValidation, validationSettings} from "./components/validation";
import {getInitialCards, getUser, patchUser, postCard, updateAvatar} from "./components/api";
import {handleSubmit} from "./utils/utils";

//Объявление элементов DOM

export const cardList = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const profileImage = document.querySelector('.profile__image');
const avatar = profileImage.querySelector('.avatar__img');

const editAvatarForm = document.forms['edit-avatar'];
const editAvatarPopup = document.querySelector('.popup_type_edit-avatar')
const editAvatarButton = document.querySelector('.avatar__edit');

const editProfileForm = document.forms['edit-profile'];
const editProfilePopup = document.querySelector('.popup_type_edit');
const editProfileButton = document.querySelector('.profile__edit-button');

const addNewCardForm = document.forms['new-place'];
const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_type_new-card');

export const showImagePopup = document.querySelector('.popup_type_image');
export const imagePopupTitle = document.querySelector('.popup__caption');
export const imagePopupImage = document.querySelector('.popup__image');

const closeButtons = document.querySelectorAll('.popup__close');

const nameInput = editProfileForm.elements.name;
const descriptionInput = editProfileForm.elements.description;
let userId;

function openCard(cardElement) {
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    imagePopupTitle.textContent = cardTitle.textContent;
    imagePopupImage.src = cardImage.src;
    imagePopupImage.alt = cardImage.alt;
    openModal(showImagePopup);
}

function updateEditProfileFormFields(userData) {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
}

editAvatarButton.addEventListener('click', () => {
    openModal(editAvatarPopup)
})

editProfileButton.addEventListener('click', () => {
    nameInput.value =  profileTitle.textContent;
    descriptionInput.value = profileDescription.textContent;
    clearValidation(editProfileForm, validationSettings)
    openModal(editProfilePopup)
});

addNewCardButton.addEventListener('click', () => {
    openModal(addNewCardPopup)
});

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closeModal(popup));
});

function changeProfileInfo (editProfileForm, popup) {
    function handleProfileFormSubmit(evt) {
        function makeRequest() {
            return patchUser(nameInput.value, descriptionInput.value)
                .then((userData) => {
                    updateEditProfileFormFields(userData)
                    closeModal(popup)
                })
        }
        handleSubmit(makeRequest, evt);
    }
    editProfileForm.addEventListener('submit', handleProfileFormSubmit);
}

function addNewCard(addNewCardForm, popup) {
    const placeNameInput = addNewCardForm.elements['place-name'];
    const urlInput = addNewCardForm.elements.link;

    function handleAddNewCard(evt) {
        function makeRequest() {
            return postCard(placeNameInput.value, urlInput.value)
            .then((cardData) => {
                const newCard = createCard(cardData, deleteCard, likeCard, openCard, cardData.owner._id)
                cardList.prepend(newCard)
                closeModal(popup)
            })
        }
        handleSubmit(makeRequest, evt)
    }
    addNewCardForm.addEventListener('submit', handleAddNewCard);
}

function changeAvatar(formElement, popup) {
    const urlInput = formElement.elements.avatar;
    function handleProfileFormSubmit(evt) {
        function makeRequest() {
            return updateAvatar(urlInput.value)
                .then((res) => {
                    avatar.src = res.avatar;
                    closeModal(popup)
                })
        }
        handleSubmit(makeRequest, evt);
    }
    formElement.addEventListener('submit', handleProfileFormSubmit);
}

changeProfileInfo(editProfileForm, editProfilePopup)
addNewCard(addNewCardForm, addNewCardPopup);
changeAvatar(editAvatarForm, editAvatarPopup);

enableValidation(validationSettings);

Promise.all([getInitialCards(), getUser()])
    .then(([initialCards, userData]) => {
        // Обработка результатов получения данных о картах и пользователе
        initialCards.forEach((cardData) => {
            const newCard = createCard(cardData, deleteCard, likeCard, openCard, userData._id);
            cardList.append(newCard);
        });
        userId = userData._id;
        avatar.src = userData.avatar
        updateEditProfileFormFields(userData)
    })
    .catch((error) => console.error(error));

//Спасибо за ревью и полезные советы! *_*

import './pages/index.css'
import {createCard, deleteCard, likeCard, openCard} from "./components/card";
import {openModal, closeModal} from "./components/modal";
import {enableValidation, validationSettings, clearValidation} from "./components/validation";
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


editAvatarButton.addEventListener('click', () => {
    openModal(editAvatarPopup)
})

editProfileButton.addEventListener('click', () => {
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
    const nameInput = editProfileForm.elements.name;
    const descriptionInput = editProfileForm.elements.description;

    function updateFormFields(userData) {
        profileTitle.textContent = userData.name;
        profileDescription.textContent = userData.about;
        nameInput.value = userData.name;
        descriptionInput.value = userData.about;
    }

    getUser()
        .then((userData) => {
            updateFormFields(userData)
        })
        .catch(error => console.error(error))

    function handleProfileFormSubmit(evt) {
        function makeRequest() {
            return patchUser(nameInput.value, descriptionInput.value)
                .then((userData) => {
                    updateFormFields(userData)
                })
                .catch((err) => console.error(err))
                .finally(() => {
                    closeModal(popup)
                    clearValidation(popup, validationSettings)
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
            return Promise.all([postCard(placeNameInput.value, urlInput.value), getUser()])
            .then(([cardData, userData]) => {
                const newCard = createCard(cardData, deleteCard, likeCard, openCard, userData._id)
                cardList.prepend(newCard)
            })
                .catch(error => console.error(error))
                .finally(()=> {
                closeModal(popup)
                clearValidation(popup, validationSettings)
                }
        )
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
                })
                .catch((err) => console.error(err))
                .finally(() => closeModal(popup))
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
        avatar.src = userData.avatar
    })
    .catch((error) => console.error(error));

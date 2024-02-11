import {createCard, deleteCard, likeCard, openCard} from "./card";
import {cardList, profileTitle, profileDescription} from '../index'

export function openModal(popup) {
    popup.classList.toggle('popup_is-animated');
    setTimeout(() => {
        popup.classList.add("popup_is-opened");
    }, 1);

    document.addEventListener('click', handlerOverlayClick);
    document.addEventListener('keydown', handleEscKeyPress);
}

export function closeModal(popup) {
    // popup.classList.remove('popup_is-animated');
    popup.classList.remove("popup_is-opened");

    document.removeEventListener('keydown', handleEscKeyPress);
    document.removeEventListener('click', handlerOverlayClick);
}

function handleEscKeyPress(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
}

function handlerOverlayClick(event) {
    if (event.target.classList.contains("popup_is-opened")) {
        closeModal(event.target);
    }
}


export function changeProfileInfo (editProfileForm, editProfilePopup) {
    const nameInput = editProfileForm.elements.name;
    const jobInput = editProfileForm.elements.description;
    nameInput.value = profileTitle.textContent
    jobInput.value = profileDescription.textContent

    function handleProfileSubmit (evt){
        evt.preventDefault();

        const nameValue = nameInput.value;
        const jobValue = jobInput.value;

        profileTitle.textContent = nameValue;
        profileDescription.textContent = jobValue;

        closeModal(editProfilePopup)
    }

    editProfileForm.addEventListener('submit', handleProfileSubmit);
}

export function addNewCard(addNewCardForm, popup) {
    const placeNameInput = addNewCardForm.elements['place-name'];
    const urlInput = addNewCardForm.elements.link;

    function handleAddNewCard (evt) {
        evt.preventDefault();
        const dataCard =
            {
                name: placeNameInput.value,
                link: urlInput.value,
            }

        const card = createCard(dataCard, deleteCard, likeCard, openCard);
        cardList.prepend(card);
        closeModal(popup);
    }

    addNewCardForm.addEventListener('submit', handleAddNewCard);
}








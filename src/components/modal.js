import {createCard, deleteCard, likeCard, openCard} from "./card";

const nameDisplay = document.querySelector('.profile__title');
const jobDisplay = document.querySelector('.profile__description');
const cardList = document.querySelector('.places__list');

export function openModal(popup) {
    popup.classList.toggle('popup_is-animated');
    setTimeout(() => {
        popup.classList.add("popup_is-opened");
    }, 1);

    document.addEventListener('click', handlerOverlayClick);
    document.addEventListener('keydown', handleEscKeyPress);
}

export function closeModal(popup) {
    popup.classList.remove('popup_is-animated');
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


export function changeProfileInfo (profileForm, profilePopup) {
    const nameInput = profileForm.elements.name;
    const jobInput = profileForm.elements.description;

    function handleProfileSubmit (evt){
        evt.preventDefault();

        const nameValue = nameInput.value;
        const jobValue = jobInput.value;

        nameDisplay.textContent = nameValue;
        jobDisplay.textContent = jobValue;

        closeModal(profilePopup)
    }

    profileForm.addEventListener('submit', handleProfileSubmit);
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








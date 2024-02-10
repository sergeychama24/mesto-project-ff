import {createCard, deleteCard} from "./card";

export function openModal(popup) {
    popup.classList.toggle('popup_is-animated');
    popup.classList.add('popup_is-opened');


    document.addEventListener('click', handlerOverlayClick);
    document.addEventListener('keydown', handleEscKeyPress);
}

export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');

    document.removeEventListener('keydown', handleEscKeyPress);
    document.removeEventListener('click', handlerOverlayClick);
}

function handleEscKeyPress(event) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (event.key === 'Escape') {
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
}

function handlerOverlayClick(event) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (event.target === openedPopup) {
        openedPopup.classList.remove('popup_is-opened');
    }
}


export function changeProfileInfo (formElement, popup) {
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

        closeModal(popup)

    }

    formElement.addEventListener('submit', handleFormSubmit);
}

export function addNewCard(formElement, popup) {
    const placeNameInput = formElement.elements['place-name'];
    const urlInput = formElement.elements.link;

    function handleFormSubmit(evt) {
        evt.preventDefault();

        let dataCard =
            {
                name: placeNameInput.value,
                link: urlInput.value,
            }

        const card = createCard(dataCard, deleteCard);
        const cardList = document.querySelector('.places__list');
        cardList.prepend(card);

        placeNameInput.value = ''
        urlInput.value = ''

        closeModal(popup)
    }

    formElement.addEventListener('submit', handleFormSubmit);

}










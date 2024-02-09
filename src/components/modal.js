export function openModal(button, popup) {
    button.addEventListener('click', () => {
        popup.classList.add('popup_is-opened');
        popup.classList.toggle('popup_is-animated');
    });

    document.addEventListener('click', handlerOverlayClick);
    document.addEventListener('keydown', handleEscKeyPress);
}



export function closeModal(closeButton, popups) {
    closeButton.addEventListener('click', () => {
        popups.forEach(popup => {
            popup.classList.remove('popup_is-opened');
            popup.classList.toggle('popup_is-animated');
        });

        document.removeEventListener('keydown', handleEscKeyPress);
        document.removeEventListener('click', handlerOverlayClick);
    });
}

function handleEscKeyPress(event) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (event.key === 'Escape') {
        if (openedPopup) {
            openedPopup.classList.remove('popup_is-opened');
        }
    }
}



function handlerOverlayClick(event) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (event.target === openedPopup) {popup_is-opened
        openedPopup.classList.remove('');
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

        popup.classList.remove('popup_is-opened')

    }

    formElement.addEventListener('submit', handleFormSubmit);
}











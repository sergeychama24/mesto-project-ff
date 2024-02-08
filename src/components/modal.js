export function openModal(button, popup) {
    button.addEventListener('click', () => {
        popup.classList.add('popup_is-opened');
    });

    document.addEventListener('click', handlerOverlayClick);
    document.addEventListener('keydown', handleEscKeyPress);
}



export function closeModal(closeButton, popups) {
    closeButton.addEventListener('click', () => {
        popups.forEach(popup => {
            popup.classList.remove('popup_is-opened');
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
    if (event.target === openedPopup) {
        openedPopup.classList.remove('popup_is-opened');
    }
}
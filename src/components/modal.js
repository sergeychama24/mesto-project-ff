export function openModal(popup) {
    popup.classList.toggle('popup_is-animated');
    setTimeout(() => {
        popup.classList.add("popup_is-opened");
    }, 1);

    document.addEventListener('click', handlerOverlayClick);
    document.addEventListener('keydown', handleEscKeyPress);
}

export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    setTimeout(() => {
        popup.classList.toggle("popup_is-animated");
    }, 400);


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


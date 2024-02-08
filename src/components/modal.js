const popupEdit = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');

function openPopup(popup, openButton) {
    popup.classList.add('popup_is-opened')
}

function closePopup(popup, closeButton) {
        popup.classList.toggle('popup_is-opened')
    }
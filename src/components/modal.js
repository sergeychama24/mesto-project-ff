import {createCard, deleteCard, likeCard, openCard} from "./card";
import {cardList, profileTitle, profileDescription, editProfileForm} from '../index'
import {getUser, patchUser, postCard} from "./api";

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


export function changeProfileInfo (editProfileForm, editProfilePopup) {
    const nameInput = editProfileForm.elements.name;
    const jobInput = editProfileForm.elements.description;

    getUser()
        .then((data) => {
            profileTitle.textContent = data.name;
            profileDescription.textContent = data.about;
            nameInput.value = profileTitle.textContent;
            jobInput.value = profileDescription.textContent;
        })

    function handleProfileSubmit (evt){
        evt.preventDefault();
        const nameValue = nameInput.value;
        const jobValue = jobInput.value;

        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;

        profileTitle.textContent = nameValue;
        profileDescription.textContent = jobValue;

        patchUser(nameValue, jobValue)

        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;

        closeModal(editProfilePopup)
    }

    editProfileForm.addEventListener('submit', handleProfileSubmit);
}

export function addNewCard(addNewCardForm, popup) {
    const placeNameInput = addNewCardForm.elements['place-name'];
    const urlInput = addNewCardForm.elements.link;
    const likesCounter = []

    function handleAddNewCard (evt) {
        evt.preventDefault();

        const dataCard =
            {
                name: placeNameInput.value,
                link: urlInput.value,
            }

        postCard(placeNameInput.value, urlInput.value).then(
            (response) => {
                const card = createCard(dataCard, deleteCard, likeCard, openCard);
                cardList.prepend(card);
            }
        );


        evt.target.reset()
        closeModal(popup);
    }

    addNewCardForm.addEventListener('submit', handleAddNewCard);
}



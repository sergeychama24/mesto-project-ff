import './pages/index.css'
import {initialCards} from "./components/cards";
import {cardList, deleteCard, createCard, addLikeHandler} from "./components/card";
import {} from "./components/modal"

initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, deleteCard, addLikeHandler);
    cardList.append(card);
})


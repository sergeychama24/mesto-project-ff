import './pages/index.css'
import {initialCards} from "./components/cards";
import {cardList, deleteCard, createCard} from "./components/card";


initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, deleteCard);

    cardList.append(card);
})

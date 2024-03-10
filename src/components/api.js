import {checkResponse} from "../utils/utils";

//Api requests
const config = {
   baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-8',
   headers: {
       authorization: 'b67bf0a8-24d4-4db4-88a1-ee0bc39956b1',
       'Content-Type': 'application/json'
   }
}

function request(endpoint, method = 'GET', body) {
    const url = `${config.baseURL}/${endpoint}`;
    const options = {
        method,
        headers: config.headers,
        body: body ? JSON.stringify(body) : undefined,
    }

    return fetch(url, options).then(checkResponse)
}

export const getInitialCards = () => {
    return request('cards');
}


export const getUser = () => {
    return request('users/me');
}

export const patchUser = (name, about) => {
    return request('users/me', 'PATCH', { name, about});
}

export const postCard = (name, link) => {
    return request('cards', 'POST', { name, link });
}

export const deleteCardRequest = (cardId) => {
    return request(`cards/${cardId}`, 'DELETE')
}

export const addLikeRequest = (cardId) => {
    return request(`cards/likes/${cardId}`, 'PUT');
}

export const removeLikeRequest = (cardId) => {
    return request(`cards/likes/${cardId}`, 'DELETE');
}

export const updateAvatar = (link) => {
    return request('users/me/avatar', 'PATCH', { avatar: link });
}
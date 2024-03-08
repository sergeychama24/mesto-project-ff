//Api requests
const config = {
   baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-8',
   headers: {
       authorization: 'b67bf0a8-24d4-4db4-88a1-ee0bc39956b1',
       'Content-Type': 'application/json'
   }
}

export const getInitialCards = () => {
    return fetch(`${config.baseURL}/cards`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .catch((err) => {
            throw new Error(err)
        })
}


export const getUser = () => {
    return fetch(`${config.baseURL}/users/me`, {
        headers: config.headers
    })
    .then(res => res.json())
    .catch((err) => {})
}

export const patchUser = (name, about) => {
    return fetch(`${config.baseURL}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: `${name}`,
            about: `${about}`
        })
    });
}

export const postCard = (name, link) => {
    return fetch(`${conig.baseURL}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: `${name}`,
            link: `${link}`,
        })
    })
}

export const deleteCardRequest = (cardId) => {
    return fetch(`${config.baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
}

export const getCardLikes = (cardId) => {
    return fetch(`${config.baseURL}/cards/${cardId}`, {
        method: 'GET',
        headers: config.headers
    })
        .then(res => res.json())
}

export const addLikeRequest = (cardId) => {
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
}

export const removeLikeRequest = (cardId) => {
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
}

export const updateAvatar = (link) => {
    return fetch(`${config.baseURL}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link,
        })
    })
}
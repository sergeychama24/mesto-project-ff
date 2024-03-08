const key = "b67bf0a8-24d4-4db4-88a1-ee0bc39956b1";
const id = "wff-cohort-8"
const url = `https://mesto.nomoreparties.co/v1/${id}/`

//Api requests

export const getInitialCards = () => {
    return fetch(`${url}/cards`, {
        headers: {
            authorization: key,
        }
    })
        .then(res => res.json())
        .catch((err) => {
            throw new Error(err)
        })
}

export const getUser = () => {
    return fetch(`${url}/users/me`, {
        headers: {
            authorization: key,
        }
    })
    .then(res => res.json())
    .catch((err) => {})
}

export const patchUser = (name, about) => {
    return fetch(`${url}users/me`, {
        method: 'PATCH',
        headers: {
            authorization: key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            about: `${about}`
        })
    });
}

export const postCard = (name, link) => {
    return fetch(`${url}cards`, {
        method: 'POST',
        headers: {
            authorization: key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            link: `${link}`,
        })
    })
}

export const deleteCardRequest = (cardId) => {
    return fetch(`${url}cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: key,
        }
    })
}

export const getCardLikes = (cardId) => {
    return fetch(`${url}cards/likes/${cardId}`, {
        method: 'GET',
        headers: {
            authorization: key,
        }
    })
        .then(res => res.json())
}

export const addLikeRequest = (cardId) => {
    return fetch(`${url}cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: key,
        }
    })
}

export const removeLikeRequest = (cardId) => {
    return fetch(`${url}cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: key,
        }
    })
}

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLikeRequest: () => (/* binding */ addLikeRequest),\n/* harmony export */   deleteCardRequest: () => (/* binding */ deleteCardRequest),\n/* harmony export */   getCardLikes: () => (/* binding */ getCardLikes),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   patchUser: () => (/* binding */ patchUser),\n/* harmony export */   postCard: () => (/* binding */ postCard),\n/* harmony export */   removeLikeRequest: () => (/* binding */ removeLikeRequest),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar)\n/* harmony export */ });\n//Api requests\nvar config = {\n  baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-8',\n  headers: {\n    authorization: 'b67bf0a8-24d4-4db4-88a1-ee0bc39956b1',\n    'Content-Type': 'application/json'\n  }\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseURL, \"/cards\"), {\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  }).catch(function (err) {\n    throw new Error(err);\n  });\n};\nvar getUser = function getUser() {\n  return fetch(\"\".concat(config.baseURL, \"/users/me\"), {\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  }).catch(function (err) {\n    throw new Error(err);\n  });\n};\nvar patchUser = function patchUser(name, about) {\n  return fetch(\"\".concat(config.baseURL, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: \"\".concat(name),\n      about: \"\".concat(about)\n    })\n  });\n};\nvar postCard = function postCard(name, link) {\n  return fetch(\"\".concat(config.baseURL, \"/cards\"), {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: \"\".concat(name),\n      link: \"\".concat(link)\n    })\n  });\n};\nvar deleteCardRequest = function deleteCardRequest(cardId) {\n  return fetch(\"\".concat(config.baseURL, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  });\n};\nvar getCardLikes = function getCardLikes(cardId) {\n  return fetch(\"\".concat(config.baseURL, \"/cards/\").concat(cardId), {\n    method: 'GET',\n    headers: config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  }).catch(function (err) {\n    throw new Error(err);\n  });\n};\nvar addLikeRequest = function addLikeRequest(cardId) {\n  return fetch(\"\".concat(config.baseURL, \"/cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: config.headers\n  });\n};\nvar removeLikeRequest = function removeLikeRequest(cardId) {\n  return fetch(\"\".concat(config.baseURL, \"/cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  });\n};\nvar updateAvatar = function updateAvatar(link) {\n  return fetch(\"\".concat(config.baseURL, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: link\n    })\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   openCard: () => (/* binding */ openCard)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n\n\n\nvar cardTemplate = document.querySelector('#card-template').content;\nfunction createCard(dataCard, deleteCard, likeCard, openCard, userId) {\n  var cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  cardImage.src = dataCard.link;\n  cardImage.alt = dataCard.name;\n  var cardTitle = cardElement.querySelector('.card__title');\n  cardTitle.textContent = dataCard.name;\n\n  //Проверка на рендер кнопки удаления у карточки пользователя\n  var cardDeleteButton = cardElement.querySelector('.card__delete-button');\n  if (dataCard.owner !== undefined) {\n    if (dataCard.owner._id !== userId) {\n      cardDeleteButton.remove();\n    }\n  }\n\n  //Получение и отображение количества лайков у карточки\n  var likesCounter = cardElement.querySelector('.card__like-counter');\n  likesCounter.textContent = dataCard.likes !== undefined ? dataCard.likes.length : 0;\n\n  //Добавление обработчика на постановку и снятие лайка\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', function () {\n    likeCard(likeButton, dataCard, userId, likesCounter);\n  });\n\n  //Проверка на уже поставленый лайк пользователем для рендера\n  if (dataCard.likes !== undefined) {\n    if (dataCard.likes.some(function (like) {\n      return like._id === userId;\n    })) {\n      likeButton.classList.add('card__like-button_is-active');\n    }\n  }\n\n  //Добавление обработчика на открытие попаппа карточки\n  cardImage.addEventListener('click', function () {\n    openCard(cardElement);\n  });\n\n  //Добавление обработчика на удаление карточки\n  cardDeleteButton.addEventListener('click', function () {\n    deleteCard(cardElement, dataCard);\n  });\n  return cardElement;\n}\n\n//Функция удаления карточки\nfunction deleteCard(cardElement, dataCard) {\n  (0,_api__WEBPACK_IMPORTED_MODULE_2__.deleteCardRequest)(dataCard._id).then(cardElement.remove());\n}\nfunction likeCard(likeButton, dataCard, userId, likesCounter) {\n  if (likeButton.classList.contains('card__like-button_is-active')) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_2__.removeLikeRequest)(dataCard._id).then(function (res) {\n      return res.json();\n    }).then(function (card) {\n      likeButton.classList.toggle('card__like-button_is-active');\n      likesCounter.textContent = card.likes.length;\n    });\n  } else {\n    (0,_api__WEBPACK_IMPORTED_MODULE_2__.addLikeRequest)(dataCard._id).then(function (res) {\n      return res.json();\n    }).then(function (card) {\n      likeButton.classList.toggle('card__like-button_is-active');\n      likesCounter.textContent = card.likes.length;\n    });\n  }\n}\nfunction openCard(cardElement) {\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  _index__WEBPACK_IMPORTED_MODULE_1__.imagePopupTitle.textContent = cardTitle.textContent;\n  _index__WEBPACK_IMPORTED_MODULE_1__.imagePopupImage.src = cardImage.src;\n  _index__WEBPACK_IMPORTED_MODULE_1__.imagePopupImage.alt = cardImage.alt;\n  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(_index__WEBPACK_IMPORTED_MODULE_1__.showImagePopup);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCard: () => (/* binding */ addNewCard),\n/* harmony export */   changeAvatar: () => (/* binding */ changeAvatar),\n/* harmony export */   changeProfileInfo: () => (/* binding */ changeProfileInfo),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n\n\n\nfunction openModal(popup) {\n  popup.classList.toggle('popup_is-animated');\n  setTimeout(function () {\n    popup.classList.add(\"popup_is-opened\");\n  }, 1);\n  document.addEventListener('click', handlerOverlayClick);\n  document.addEventListener('keydown', handleEscKeyPress);\n}\nfunction closeModal(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  setTimeout(function () {\n    popup.classList.toggle(\"popup_is-animated\");\n  }, 400);\n  document.removeEventListener('keydown', handleEscKeyPress);\n  document.removeEventListener('click', handlerOverlayClick);\n}\nfunction handleEscKeyPress(event) {\n  if (event.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closeModal(openedPopup);\n    }\n  }\n}\nfunction handlerOverlayClick(event) {\n  if (event.target.classList.contains(\"popup_is-opened\")) {\n    closeModal(event.target);\n  }\n}\nfunction changeProfileInfo(editProfileForm, editProfilePopup) {\n  var nameInput = editProfileForm.elements.name;\n  var jobInput = editProfileForm.elements.description;\n  (0,_api__WEBPACK_IMPORTED_MODULE_2__.getUser)().then(function (data) {\n    _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent = data.name;\n    _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent = data.about;\n    nameInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent;\n    jobInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent;\n  });\n  function handleProfileSubmit(evt) {\n    evt.preventDefault();\n    var nameValue = nameInput.value;\n    var jobValue = jobInput.value;\n    nameInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent;\n    jobInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent;\n    _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent = nameValue;\n    _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent = jobValue;\n    (0,_api__WEBPACK_IMPORTED_MODULE_2__.patchUser)(nameValue, jobValue);\n    nameInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileTitle.textContent;\n    jobInput.value = _index__WEBPACK_IMPORTED_MODULE_1__.profileDescription.textContent;\n    closeModal(editProfilePopup);\n  }\n  editProfileForm.addEventListener('submit', handleProfileSubmit);\n}\nfunction addNewCard(addNewCardForm, popup) {\n  var placeNameInput = addNewCardForm.elements['place-name'];\n  var urlInput = addNewCardForm.elements.link;\n  function handleAddNewCard(evt) {\n    var dataCard = {\n      name: placeNameInput.value,\n      link: urlInput.value\n    };\n    (0,_api__WEBPACK_IMPORTED_MODULE_2__.postCard)(placeNameInput.value, urlInput.value).then(function (response) {\n      var card = (0,_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(dataCard, _card__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _card__WEBPACK_IMPORTED_MODULE_0__.likeCard, _card__WEBPACK_IMPORTED_MODULE_0__.openCard);\n      _index__WEBPACK_IMPORTED_MODULE_1__.cardList.prepend(card);\n    });\n    evt.target.reset();\n    closeModal(popup);\n  }\n  addNewCardForm.addEventListener('submit', handleAddNewCard);\n}\nfunction changeAvatar(changeAvatarForm, popup, avatar) {\n  var urlInput = changeAvatarForm.elements.avatar;\n  function handleAvatarChange(evt) {\n    var avatarLink = urlInput.value;\n    (0,_api__WEBPACK_IMPORTED_MODULE_2__.updateAvatar)(avatarLink).then(function (response) {\n      avatar.src = avatarLink;\n      console.log(avatar);\n    });\n    evt.target.reset();\n    closeModal(popup);\n  }\n  changeAvatarForm.addEventListener('submit', handleAvatarChange);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add('popup__input_type_error');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('active');\n};\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove('popup__input_type_error');\n  errorElement.classList.remove('active');\n  errorElement.textContent = '';\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  toggleButtonState(inputList, buttonElement);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(\"inactive\");\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(\"inactive\");\n  }\n};\nvar enableValidation = function enableValidation() {\n  var formList = Array.from(document.querySelectorAll('.popup__form'));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement);\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardList: () => (/* binding */ cardList),\n/* harmony export */   editAvatarForm: () => (/* binding */ editAvatarForm),\n/* harmony export */   editProfileForm: () => (/* binding */ editProfileForm),\n/* harmony export */   imagePopupImage: () => (/* binding */ imagePopupImage),\n/* harmony export */   imagePopupTitle: () => (/* binding */ imagePopupTitle),\n/* harmony export */   profileDescription: () => (/* binding */ profileDescription),\n/* harmony export */   profileImage: () => (/* binding */ profileImage),\n/* harmony export */   profileTitle: () => (/* binding */ profileTitle),\n/* harmony export */   showImagePopup: () => (/* binding */ showImagePopup)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar cardList = document.querySelector('.places__list');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar profileImage = document.querySelector('.profile__image');\nvar avatar = profileImage.querySelector('.avatar__img');\nvar editAvatarForm = document.forms['edit-avatar'];\nvar editAvatarPopup = document.querySelector('.popup_type_edit-avatar');\nvar editAvatarButton = document.querySelector('.avatar__edit');\nvar editProfileForm = document.forms['edit-profile'];\nvar editProfilePopup = document.querySelector('.popup_type_edit');\nvar editProfileButton = document.querySelector('.profile__edit-button');\nvar addNewCardForm = document.forms['new-place'];\nvar addNewCardButton = document.querySelector('.profile__add-button');\nvar addNewCardPopup = document.querySelector('.popup_type_new-card');\nvar showImagePopup = document.querySelector('.popup_type_image');\nvar imagePopupTitle = document.querySelector('.popup__caption');\nvar imagePopupImage = document.querySelector('.popup__image');\nvar closeButtons = document.querySelectorAll('.popup__close');\neditAvatarButton.addEventListener('click', function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(editAvatarPopup);\n});\neditProfileButton.addEventListener('click', function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(editProfilePopup);\n});\naddNewCardButton.addEventListener('click', function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(addNewCardPopup);\n});\ncloseButtons.forEach(function (button) {\n  var popup = button.closest('.popup');\n  button.addEventListener('click', function () {\n    return (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n  });\n});\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.changeProfileInfo)(editProfileForm, editProfilePopup);\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.addNewCard)(addNewCardForm, addNewCardPopup);\n(0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.changeAvatar)(editAvatarForm, editAvatarPopup, avatar);\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.enableValidation)();\n\n//validation\n\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getUser)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    initialCards = _ref2[0],\n    userData = _ref2[1];\n  // Обработка результатов получения данных о картах и пользователе\n  initialCards.forEach(function (card) {\n    var newCard = (0,_components_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(card, _components_card__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.likeCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.openCard, userData._id);\n    cardList.append(newCard);\n  });\n  avatar.src = userData.avatar;\n}).catch(function (error) {\n  console.error('Ошибка при получении данных:', error);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
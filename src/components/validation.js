export const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = document.querySelector(`${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
}
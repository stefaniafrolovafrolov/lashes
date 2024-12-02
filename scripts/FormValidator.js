class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._config = config;
    this._buttonSave = this._form.querySelector(
      this._config.submitButtonSelector
    );

    this._inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector)
    );
  }

  enableValidation() {
    this._setEventListeners();
  }

  disableSubmitButton() {
    this._buttonSave.classList.remove(this._config.activeButtonClass);
    this._buttonSave.classList.add(this._config.inactiveButtonClass);
    this._buttonSave.disabled = true;
  }

  enableSubmitButton() {
    this._buttonSave.classList.add(this._config.activeButtonClass);
    this._buttonSave.classList.remove(this._config.inactiveButtonClass);
    this._buttonSave.disabled = false;
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-errors`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-errors`);

    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  /*_checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }*/
  _checkInputValidity(inputElement) {
    // Проверка длины имени
    if (inputElement.value.length < 2) {
      inputElement.setCustomValidity(
        "Имя должно содержать как минимум 2 символа."
      );
    } else {
      inputElement.setCustomValidity(""); // Сбрасываем ошибку, если длина валидная
    }

    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._toggleButtonState(this._inputList, this._buttonSave);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonSave);
      });
    });
  }
}

export { FormValidator };

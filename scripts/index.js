/*import { PopupWithForm } from "./PopupWithForm.js";*/
import { FormValidator } from "./formValidator.js";
import { validationConfig } from "../utils/validationConfig.js";
import {
  formContactRegProcedures,
  buttonSubmitContactForm,
} from "../utils/constants.js";

//валидация формы "Записаться на процедуру"
const formContactProceduresValidator = new FormValidator(
  validationConfig,
  formContactRegProcedures
);

formContactProceduresValidator.enableValidation();


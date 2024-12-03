/*const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get("text"),
    phone: formData.get("phone"),
    procedures: formData.get("procedures"),
  };

  fetch("http://localhost:3000/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const successMessage = document.querySelector(".success-message");
      successMessage.style.display = "block"; // показываем сообщение об успешной отправке
      form.reset(); // очищаем форму

      setTimeout(() => {
        successMessage.style.display = "none"; // скрываем сообщение
      }, 6000);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});*/

/*const form = document.getElementById("contactForm");
const selectSingleInputs = document.querySelectorAll(".__select__input"); 
// Получаем все радио-кнопки кастомного селекта
const selectSingleTitle = document.querySelector('.__select__title');
const errorMessage = document.getElementById('procedures-error'); // Сообщение об ошибке
const submitButton = document.getElementById('submitButton');


//console.log(selectSingleInputs)

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    
    // Получите значение выбранного варианта из кастомного селекта
    const selectedOption = Array.from(selectSingleInputs).find(input => input.checked);

  

    // Убедитесь, что у нас есть выбранная опция
    if (!selectedOption) {
        console.error("Не выбрана процедура!");
        errorMessage.style.display = "block"; // Показываем сообщение об ошибке
        return; // Возвращаемся, если ничего не выбрано
    } else {
        errorMessage.style.display = "none"; // Скрываем сообщение об ошибке
    }

    // Соберите данные для отправки
    const data = {
        name: formData.get("text"),
        phone: formData.get("phone"),
        procedures: selectedOption.value,  // Используем значение из кастомного селекта
    };

    console.log(data); // Логи для дебага перед отправкой запроса
   

      // Изменяем текст кнопки перед отправкой
      submitButton.textContent = 'Отправка...'; 

    fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка сети");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const successMessage = document.querySelector(".success-message");
        successMessage.style.display = "block"; // Показываем сообщение об успешной отправке
        form.reset(); // Очищаем форму
       
          // Устанавливаем заголовок селекта на "Выберите процедуру" через 6 секунд
          setTimeout(() => {
            selectSingleTitle.textContent = "Выберите процедуру"; // Сбросим текст селекта
           
        }, 6000);

       

        setTimeout(() => {
            successMessage.style.display = "none"; // Скрываем сообщение
        }, 6000);
    })
    .catch((error) => {
        console.error("Ошибка:", error);
        // Возвращаем текст кнопки к оригиналу в случае ошибки
        submitButton.textContent = 'Оставить заявку';
    })
      .finally(() => {
        // Возвращаем текст кнопки к оригиналу
        submitButton.textContent = 'Оставить заявку';
        
    });
});
*/

const form = document.getElementById("contactForm");
const selectSingleInputs = document.querySelectorAll(".__select__input");
const selectSingleTitle = document.querySelector(".__select__title");
const errorMessage = document.getElementById("procedures-error"); // Сообщение об ошибке
const submitButton = document.getElementById("submitButton"); // Кнопка отправки
const serverErrorMessage = document.getElementById("server-error-message"); // Сообщение об ошибке сервера

// Устанавливаем изначальный класс кнопки
submitButton.classList.add("registration__formRegisterButton_disabled");



      const selectSingle = document.querySelector(".__select");
      const selectSingle_title = selectSingle.querySelector(".__select__title");
      const selectSingle_labels =
        selectSingle.querySelectorAll(".__select__label");

      // Toggle menu
      selectSingle_title.addEventListener("click", () => {
        if ("active" === selectSingle.getAttribute("data-state")) {
          selectSingle.setAttribute("data-state", "");
        } else {
          selectSingle.setAttribute("data-state", "active");
        }
      });

      // Close when click to option
      for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener("click", (evt) => {
          selectSingle_title.textContent = evt.target.textContent;
          selectSingle.setAttribute("data-state", "");
        });
      }
 

// Функция для проверки заполненности полей
function areFieldsValid() {
  const formData = new FormData(form);
  const nameValue = formData.get("text");
  const phoneValue = formData.get("phone");
  const selectedOption = Array.from(selectSingleInputs).find(
    (input) => input.checked
  );
  return nameValue && phoneValue && selectedOption;
}

form.addEventListener("input", function () {
  if (areFieldsValid()) {
    submitButton.classList.remove("registration__formRegisterButton_disabled");
    submitButton.classList.add("registration__formRegisterButton_valid");
  } else {
    submitButton.classList.add("registration__formRegisterButton_disabled");
    submitButton.classList.remove("registration__formRegisterButton_valid");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Получите значение выбранного варианта из кастомного селекта
  const selectedOption = Array.from(selectSingleInputs).find(
    (input) => input.checked
  );

  // Убедитесь, что у нас есть выбранная опция
  if (!selectedOption) {
    console.error("Не выбрана процедура!");
    errorMessage.style.display = "block"; // Показываем сообщение об ошибке
    return; // Возвращаемся, если ничего не выбрано
  } else {
    errorMessage.style.display = "none"; // Скрываем сообщение об ошибке
  }

  // Соберите данные для отправки
  const data = {
    name: formData.get("text"),
    phone: formData.get("phone"),
    procedures: selectedOption.value, // Используем значение из кастомного селекта
  };

  // Проверяем заполнены ли все поля
  if (!areFieldsValid()) {
    console.error("Заполните все поля!");
    return; // Возвращаемся, если хотя бы одно поле не заполнено
  }

 // console.log(data); // Логи для дебага перед отправкой запроса

  // Дизаблим кнопку и меняем класс перед отправкой
  submitButton.disabled = true;
  submitButton.textContent = "Отправка...";
  submitButton.classList.add("registration__formRegisterButton_disabled");
  serverErrorMessage.style.display = "none";

  fetch("http://109.196.102.8/backend/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      const successMessage = document.querySelector(".success-message");
      successMessage.style.display = "block"; // Показываем сообщение об успешной отправке
      form.reset(); // Очищаем форму

      // Устанавливаем заголовок селекта на "Выберите процедуру" через 6 секунд
      setTimeout(() => {
        selectSingleTitle.textContent = "Выберите процедуру"; // Сбросим текст селекта
      }, 6000);

      setTimeout(() => {
        successMessage.style.display = "none"; // Скрываем сообщение
      }, 6000);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      // Показать сообщение об ошибке сервера
      serverErrorMessage.style.display = "block"; // Показываем сообщение об ошибке сервера
      serverErrorMessage.textContent =
        "Ошибка сервера. Пожалуйста, попробуйте позже."; // Текст сообщения
    })
    .finally(() => {
      // Изменяем класс кнопки на disabled после завершения
      submitButton.classList.add("registration__formRegisterButton_disabled");
      submitButton.classList.remove("registration__formRegisterButton_valid");
      submitButton.textContent = "Оставить заявку";
      submitButton.disabled = false; // Активируем кнопку
    });
});

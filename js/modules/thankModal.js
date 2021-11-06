import { modalClose } from "./modal";

function thanksModal(modalSelector) {
  const forms = document.querySelectorAll("form"),
    modal = document.querySelector(modalSelector),
    message = {
      loading: "img/form/spinner.svg",
      error: "Что-то пошло не так!!!",
      successfully: "Все успешно!!",
    };

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.successfully);
        })
        .catch(() => {
          showThanksModal(message.error);
        })
        .finally(() => {
          statusMessage.remove();
          form.reset();
        });

      // Спинер загрузки
      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);
    });
  }

  // Вывод сообщения пользователю.
  let prevModal = document.querySelector(".modal__dialog"),
    thanksBlock = document.createElement("div"),
    timeOut;
  function hideThanksModal() {
    thanksBlock.remove();
    prevModal.style.display = "block";
  }

  forms.forEach((item) => {
    bindPostData(item);
  });
  function showThanksModal(message) {
    modal.style.display = "block";
    prevModal.style.display = "none";
    thanksBlock.classList.add("modal__dialog");
    thanksBlock.setAttribute("id", "thanksBlock")
    thanksBlock.innerHTML = `
      <div class="modal__content">
      <form action="#">
      <div data-close class="modal__close">&times;</div>
      <class class="modal__title">
        ${message}
      </class>
    </div>
`;

    prevModal.after(thanksBlock);
    thanksBlock.style.display = "block";
    
  }
}

const timeOut = setTimeout((modalSelector = ".modal") => {
  modalClose(modalSelector);
  hideThanksModal(timeOut);
}, 3000);

function hideThanksModal() {
  const prevModal = document.querySelector(".modal__dialog"),
        thanksBlock = document.querySelector("#thanksBlock");
  if (thanksBlock) thanksBlock.remove();
  clearInterval(timeOut)
  prevModal.style.display = "block";
}

export default thanksModal;
export {hideThanksModal, timeOut}

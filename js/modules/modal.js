import { hideThanksModal } from "./thankModal";

function modal(modalSelector, openSelector) {
  const modal = document.querySelector(modalSelector),
        openModalAll = document.querySelectorAll(openSelector);

  openModalAll.forEach((item) => {
    item.addEventListener("click", () => modalOpen(modalSelector));
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute("data-close") == "") {
      modalClose(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.style.display === "block") {
      modalClose(modalSelector);
    }
  });

  const timerOpen = setTimeout(()=> modalOpen(modalSelector), 50000);
}
function modalOpen(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
function modalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "none";
  document.body.style.overflow = "scroll";
  hideThanksModal()
}

export default modal;
export {modalOpen}
export {modalClose}

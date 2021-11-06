function tabs() {
  const tabParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  function hideContent() {
    tabsContent.forEach((elem) => {
      elem.style.display = "none";
    });

    tabs.forEach((elem) => {
      elem.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideContent();
  showTabContent();

  tabParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((elem, i) => {
        if (elem == target) {
          hideContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;

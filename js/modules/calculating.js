const modal = require("./modal").default;

function calculating() {
  let activity,
    gender,
    weight,
    age,
    height,
    result = document.querySelector("#result");

  function calc() {
    if (!height || !age || !weight || !activity || !gender) {
      result.textContent = "_____";
      return;
    }
    if (gender == "men") {
      result.textContent = Math.round(
        (10 * weight + (6, 25 * height) - 5 * age + 5) * activity
      );
    } else {
      result.textContent = Math.round(
        (10 * weight + (6, 25 * height) - 5 * age - 161) * activity
      );
    }
  }

  function calculatorSwitch(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);
    elements.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-activity")) {
          activity = +e.target.getAttribute("data-activity");
          localStorage.setItem("activity", activity);
        } else {
          gender = e.target.getAttribute("id");
          localStorage.setItem("gender", gender);
        }
        elements.forEach((item) => item.classList.remove(activeClass));
        e.target.classList.add(activeClass);
        calc();
      });
    });
  }

  function inputNumberCalc() {
    const input = document.querySelectorAll("[data-inputClass]");
    input.forEach((elem) => {
      elem.addEventListener("input", () => {
        switch (elem.getAttribute("data-inputClass")) {
          case "height":
            isNaN(elem.value)
              ? elem.classList.add("frameError")
              : elem.classList.remove("frameError");
            height = +elem.value;
            localStorage.setItem("height", height);
            break;

          case "weight":
            isNaN(elem.value)
              ? elem.classList.add("frameError")
              : elem.classList.remove("frameError");
            weight = +elem.value;
            localStorage.setItem("weight", weight);
            break;

          case "age":
            isNaN(elem.value)
              ? elem.classList.add("frameError")
              : elem.classList.remove("frameError");
            age = +elem.value;
            localStorage.setItem("age", age);
            break;
        }
        calc();
      });
      if (localStorage.getItem("activity"))
        activity = localStorage.getItem("activity");
      else {
        activity = 1.2;
      }

      localStorage.getItem("gender")
        ? (gender = localStorage.getItem("gender"))
        : gender == "women";
    });
  }

  function getLocaleStorage() {
    const input = document.querySelectorAll("[data-inputClass]");
    input.forEach((elem) => {
      if (
        (elem.getAttribute("id") == "height") &
        (localStorage.getItem("height") != 0)
      ) {
        elem.value = +localStorage.getItem("height");
        height = +elem.value;
      }
      if (
        (elem.getAttribute("id") == "weight") &
        (localStorage.getItem("weight") != 0)
      ) {
        elem.value = +localStorage.getItem("weight");
        weight = +elem.value;
      }

      if (
        (elem.getAttribute("id") == "age") &
        (localStorage.getItem("age") != 0)
      ) {
        elem.value = +localStorage.getItem("age");
        age = +elem.value;
      }
    });

    const activityAll = document.querySelectorAll("[data-activity]");
    activityAll.forEach((item) => {
      item.classList.remove("calculating__choose-item_active");
      if (
        item.getAttribute("data-activity") == localStorage.getItem("activity")
      ) {
        item.classList.add("calculating__choose-item_active");
        activity = localStorage.getItem("activity");
      }
    });

    const genderAll = document.querySelectorAll("[data-gender]");
    genderAll.forEach((item) => {
      item.classList.remove("calculating__choose-item_active");
      if (item.getAttribute("id") == localStorage.getItem("gender")) {
        item.classList.add("calculating__choose-item_active");
        gender = localStorage.getItem("gender");
      }
    });
    calc();
  }

  calculatorSwitch("#gender", "calculating__choose-item_active");
  calculatorSwitch("#choose", "calculating__choose-item_active");
  getLocaleStorage();
  inputNumberCalc();
}

export default calculating

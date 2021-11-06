import cards from "./modules/cards";
import calculating from "./modules/calculating";
import modal from "./modules/modal";
import slider from "./modules/slider";
import thanksModal from "./modules/thankModal";
import timer from "./modules/timer";
import tabs from "./modules/tabs";

document.addEventListener("DOMContentLoaded", () => {
  calculating();
  cards();
  modal(".modal", "[data-open]");
  slider();
  thanksModal(".modal");
  timer();
  tabs();
});

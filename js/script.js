import { buttonCalculateClickHandler, resetButtonClickHandler } from "./handler.js";
import { isFilledParameters, isExistParameter } from "./util.js";

const buttonCalculateElement = document.querySelector(".form__submit-button");
const resetButtonElement = document.querySelector(".form__reset-button");
const inputsGroupElement = document.querySelector(".inputs-group");

const inputsChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isFilledParameters()) {
        buttonCalculateElement.disabled = false;
    }
}

const inputForResetChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isExistParameter()) {
        resetButtonElement.disabled = false;
    }
}

inputsGroupElement.addEventListener("input", inputsChangeHandler);
buttonCalculateElement.addEventListener("click", buttonCalculateClickHandler);
inputsGroupElement.addEventListener("input", inputForResetChangeHandler);
resetButtonElement.addEventListener("click", resetButtonClickHandler);
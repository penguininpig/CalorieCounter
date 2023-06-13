import {
    clearParameters,
    getGainWeight,
    getLossWeight,
    getMaintainWeight,
    isExistParameter,
    isFilledParameters,
    isValidateParameters,
    showError
} from "./util.js";


const MESSAGE_ERROR_FIELD = "не удалось рассчитать";

const buttonCalculateElement = document.querySelector(".form__submit-button");
const counterResultFormElement = document.querySelector(".counter__result");
const fieldEnergyNormElement = counterResultFormElement.querySelector("#calories-norm");
const fieldEnergyMinimalElement = counterResultFormElement.querySelector("#calories-minimal");
const fieldEnergyMaximalElement = counterResultFormElement.querySelector("#calories-maximal");
const resetButtonElement = document.querySelector(".form__reset-button");

const inputsChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isFilledParameters()) {
        buttonCalculateElement.disabled = false;
    }
}

const buttonCalculateClickHandler = function (evt) {
    evt.preventDefault();
    if (isFilledParameters() && isValidateParameters()) {
        fieldEnergyNormElement.textContent = getMaintainWeight().toLocaleString();
        fieldEnergyMinimalElement.textContent = getLossWeight().toLocaleString();
        fieldEnergyMaximalElement.textContent = getGainWeight().toLocaleString();
    } else {
        showError("Проверьте введенные данные: возраст, рост (см), вес(кг)");
        fieldEnergyNormElement.textContent = MESSAGE_ERROR_FIELD;
        fieldEnergyMinimalElement.textContent = MESSAGE_ERROR_FIELD;
        fieldEnergyMaximalElement.textContent = MESSAGE_ERROR_FIELD;
    }
    counterResultFormElement.classList.remove("counter__result--hidden");
}

const inputForResetChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isExistParameter()) {
        resetButtonElement.disabled = false;
    }
}

const resetButtonClickHandler = function () {
    buttonCalculateElement.disabled = true;
    resetButtonElement.disabled = true;
    counterResultFormElement.classList.add("counter__result--hidden");
    clearParameters();
}

export { inputsChangeHandler, buttonCalculateClickHandler, inputForResetChangeHandler, resetButtonClickHandler };
const LOSS_WEIGHT_NORM = 0.15;
const GAIN_WEIGHT_NORM = 0.15;
const ActivityRate = {
    "min": 1.2,
    "low": 1.375,
    "medium": 1.55,
    "high": 1.725,
    "max": 1.9
};
const ValidParameter = {
    AGE_MIN: 0,
    AGE_MAX: 120,
    HEIGHT_MIN: 45,
    HEIGHT_MAX: 220,
    WEIGHT_MIN: 2,
    WEIGHT_MAX: 300
}

const ERROR_SHOW_TIME = 4000;

const showError = (message) => {
    const errorContainer = document.createElement('div');
    errorContainer.style.zIndex = '100';
    errorContainer.style.position = 'absolute';
    errorContainer.style.left = '50px';
    errorContainer.style.top = '385px';
    errorContainer.style.right = '50px';
    errorContainer.style.padding = '35px';
    errorContainer.style.fontSize = '40px';
    errorContainer.style.textAlign = 'center';
    errorContainer.style.backgroundColor = 'orange';
    errorContainer.style.height = 'auto';
    errorContainer.style.lineHeight = 'normal';
    errorContainer.style.borderWidth = '3px';
    errorContainer.style.borderStyle = 'solid';
    errorContainer.style.borderColor = 'red';
    errorContainer.style.borderRadius = '20px';
    errorContainer.textContent = message;
    document.body.append(errorContainer);
    setTimeout(() => {
        errorContainer.remove();
    }, ERROR_SHOW_TIME);
};

const agePerson = document.querySelector("#age");
const heightPerson = document.querySelector("#height");
const weightPerson = document.querySelector("#weight");
const genderMale = document.querySelector("#gender-male");
const activityMinimal = document.querySelector("#activity-minimal");

const clearParameters = () => {
    agePerson.value = "";
    heightPerson.value = "";
    weightPerson.value = "";
    genderMale.checked = true;
    activityMinimal.checked = true;
}

const isValidateParameters = () => {
    return agePerson.value > ValidParameter.AGE_MIN && agePerson.value < ValidParameter.AGE_MAX && heightPerson.value > ValidParameter.HEIGHT_MIN && heightPerson.value < ValidParameter.HEIGHT_MAX && weightPerson.value > ValidParameter.WEIGHT_MIN && weightPerson.value < ValidParameter.WEIGHT_MAX
}

const isFilledParameters = () => {
    return agePerson.value && heightPerson.value && weightPerson.value;
}

const isExistParameter = () => {
    return agePerson.value || heightPerson.value || weightPerson.value;
}

const getNormMale = () => {
    return (10 * parseInt(weightPerson.value, 10) + (6.25 * parseInt(heightPerson.value, 10)) - (5 * parseInt(agePerson.value, 10)) + 5);
}

const getNormFemale = () => {
    return (10 * parseInt(weightPerson.value, 10) + (6.25 * parseInt(heightPerson.value, 10)) - (5 * parseInt(agePerson.value, 10)) - 161);
}
const getNorm = () => {
    const genderMale = document.querySelector("#gender-male");
    if (genderMale.checked) {
        return getNormMale();
    }
    return getNormFemale();
}

const getActivityRate = () => {
    const activityValue = document.querySelector('[name="activity"]:checked').value;
    return ActivityRate[activityValue];
}

const getMaintainWeight = () => {
    return Math.round(getActivityRate() * getNorm());
}

const getLossWeight = () => {
    return Math.round(getMaintainWeight() - getMaintainWeight() * LOSS_WEIGHT_NORM);
}

const getGainWeight = () => {
    return Math.round(getMaintainWeight() + getMaintainWeight() * GAIN_WEIGHT_NORM);
}

export { getMaintainWeight, getLossWeight, getGainWeight, isFilledParameters, isExistParameter, clearParameters, isValidateParameters, showError }
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
// console.dir(feedbackForm);
const feedbackEmailInputEl = document.querySelector('input');
const feedbackMessageInputEl = document.querySelector('textarea');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(saveDataToLocalStorage, 500));

let formData = {};
function saveDataToLocalStorage(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateFormData();
function populateFormData() {
  const savedSettings = localStorage.getItem(STORAGE_KEY);
  const parsedSettings = JSON.parse(savedSettings);

  if (parsedSettings.email) {
    feedbackEmailInputEl.value = parsedSettings.email;
  }
  if (parsedSettings.message) {
    feedbackMessageInputEl.value = parsedSettings.message;
  }
}
form.addEventListener('submit', feedbackFormSubmit);
function feedbackFormSubmit(event) {
  event.preventDefault();
  console.log('form submitted = ', formData);

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

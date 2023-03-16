import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackFormEl = document.querySelector('.feedback-form');
const feedbackEmailInputEl = document.querySelector('input');
const feedbackMessageInputEl = document.querySelector('textarea');

feedbackFormEl.addEventListener('input', throttle(saveDataToLocalStorage, 500));

let formData = {};

function saveDataToLocalStorage(event) {
  formData = {
    email: feedbackEmailInputEl.value,
    message: feedbackMessageInputEl.value,
  };
  console.log('event.target.value:', event.target.value);
  console.log('event.target.name:', event.target.name);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateFormData();

function populateFormData() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);

  if (parsedFormData !== null) {
    feedbackEmailInputEl.value = parsedFormData.email;
    feedbackMessageInputEl.value = parsedFormData.message;
  }
}

feedbackFormEl.addEventListener('submit', feedbackFormSubmit);

function feedbackFormSubmit(event) {
  event.preventDefault();

  if (!feedbackEmailInputEl.value || !feedbackMessageInputEl.value) {
    return alert('All fields must be completed!');
  }
  console.log('form submitted = ', formData);
  formData = {};
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

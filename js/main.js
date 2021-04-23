function toggleScrolling() {
  const hamburgerToggle = document.querySelector('input.toggler');
  if(hamburgerToggle.checked == false) {
    document.body.style.overflow="scroll";
  } else {
    document.body.style.overflow="hidden";
  }
}

function thankYouMessage() {
  const emailInput = document.querySelector('input[name="email"]');
  alert(`Thanks for signing up, ${emailInput.value}!`);
}

// -------------------------MAIN-------------------------
// turn off scrolling if hamburger menu is open - turn on if closed
const hamburgerToggle = document.querySelector('input.toggler');
hamburgerToggle.addEventListener('change', toggleScrolling);

// send thank you message on form submit
const newsLetterForm = document.querySelector('#news-letter form');
newsLetterForm.addEventListener('submit', thankYouMessage);

// get the weather for Portsmouth
const ft = new Fetch();
const ui = new WeatherUI();

ft.getWeather().then((data) => {
  //call a UI method//
  ui.populateUI(data);
});
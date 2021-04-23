window.onload = function() {
  // turn off scrolling if hamburger menu is open - turn on if closed
  const hamburgerToggle = document.querySelector('input.toggler');
  hamburgerToggle.addEventListener('change', toggleScrolling);

  // send thank you message on form submit
  const newsLetterForm = document.querySelector('#news-letter form');
  newsLetterForm.addEventListener('submit', thankYouMessage);
}

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

window.onload = function() {
  // turn off scrolling if hamburger menu is open - turn on if closed
  const hamburgerToggle = document.querySelector('input.toggler');
  hamburgerToggle.addEventListener('change', toggleScrolling)
}

function toggleScrolling() {
  const hamburgerToggle = document.querySelector('input.toggler');
  if(hamburgerToggle.checked == false) {
    document.body.style.overflow="scroll";
  } else {
    document.body.style.overflow="hidden";
  }
}


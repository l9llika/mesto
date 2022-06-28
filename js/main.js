let placeChoice = document.querySelectorAll('.place__choiсe');

[].forEach.call(placeChoice, function (placeChoice) {
  placeChoice.addEventListener('click', function () {
    placeChoice.classList.toggle('place__choice_active');
  });
});
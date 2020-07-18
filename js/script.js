let popup = document.querySelector('.popup-form');
let popupToggle = document.querySelector('.map-button');
let popupClose = document.querySelector('.popup-close');

popupToggle.onclick = function() {
    popup.style.display="flex";
};
popupClose.onclick = function() {
  popup.style.display="none";
  };

// JavaScript for image overlay
function openOverlay(imageSrc) {
  var overlay = document.getElementById("image-overlay");
  var enlargedImage = document.getElementById("enlarged-image");
  enlargedImage.src = imageSrc;
  overlay.style.display = "block";
}

function closeOverlay() {
  var overlay = document.getElementById("image-overlay");
  overlay.style.display = "none";
}

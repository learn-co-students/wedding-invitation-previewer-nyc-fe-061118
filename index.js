$(document).ready(function() {
  $('input').on('input', liveUpdate)
})
  
function liveUpdate(event) {
  let inputElement = event.target
  const inputedContent = inputElement.value;
  $(`#${inputElement.name}`).html(inputedContent);
}

$(document).ready(function() {
  $('button').on('click', themeSwap)
})

function themeSwap(event) {
  let ButtonClicked = event.target
}
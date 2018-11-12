console.log('js');
let clickCount = 0;

$(readyNow);

function readyNow() {
  console.log('jq');
  $('#createButton').on('click', handleClick)
  $('#contentDiv').on('click', '.swapButton', swapClick)
  $('#contentDiv').on('click', '.deleteButton', deleteClick)
}

function handleClick() {
  console.log('in handleClick');
  clickCount += 1;
  let divEl = $(`<div class="generatedDiv" data-red="true"></div>`);
  $(divEl).append(`<p>${clickCount}</p>`);
  $(divEl).append(`<button class="swapButton">Swap</button>`);
  $(divEl).append(`<button class="deleteButton">Delete</button>`);
  $('#contentDiv').append(divEl);
}

function swapClick() {
  console.log('in swapClick');
  let div = this.closest('div');
  let red = $(div).data('red');
  if (red) {
    $(div).removeClass('generatedDiv').addClass('swapDiv');
    $(div).data("red", false);
  } else {
    $(div).removeClass('swapDiv').addClass('generatedDiv');
    $(div).data("red", true);
  }
}

function deleteClick() {
  console.log('in deleteClick');
  let div = this.closest('div');
  $(div).remove();
}

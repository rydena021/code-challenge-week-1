let clickCount = 0;

$(readyNow);

function deleteClick() {
  this.closest('div').remove();
} // end deleteClick

function handleClick() {
  clickCount += 1;
  let divEl = $(`<div class="generatedDiv"></div>`);
  $(divEl).append(`<p>${clickCount}</p>`);
  $(divEl).append(`<button class="swapButton">Swap</button>`);
  $(divEl).append(`<button class="deleteButton">Delete</button>`);
  $('#contentDiv').append(divEl);
} // end handleClick

function readyNow() {
  $('#createButton').on('click', handleClick)
  $('#contentDiv').on('click', '.swapButton', swapClick)
  $('#contentDiv').on('click', '.deleteButton', deleteClick)
} // end readyNow

function swapClick() {
  let divEl = this.closest('div');
  if ($(divEl).attr('class') == 'generatedDiv') {
    $(divEl).removeClass('generatedDiv').addClass('swapDiv');
  } else {
    $(divEl).removeClass('swapDiv').addClass('generatedDiv');
  }
} // end swapClick

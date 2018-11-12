console.log('js');
let clickCount = 0;

$(readyNow);

function readyNow() {
  console.log('jq');
  $('#createButton').on('click', handleClick)
}

function handleClick() {
  console.log('in handleClick');
  clickCount += 1;
  let divEl = $(`<div class="generatedDiv"></div>`);
  $(divEl).append(`<p>${clickCount}</p>`);
  $(divEl).append(`<button>Swap</button>`);
  $(divEl).append(`<button>Delete</button>`);
  $('#contentDiv').append(divEl);
}

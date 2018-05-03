// Select all pieces
const pieces = document.querySelectorAll('.piece');

function canMove(elementRowNumber, emptyRowNumber, emptyIndex, elementIndex) {
  return (elementRowNumber === emptyRowNumber && emptyIndex + 1 === elementIndex) ||
  (elementRowNumber === emptyRowNumber && emptyIndex - 1 === elementIndex) ||
  (elementRowNumber === emptyRowNumber + 1  && emptyIndex === elementIndex) ||
  (elementRowNumber === emptyRowNumber - 1  && emptyIndex === elementIndex)
}

function move(element) {
  // find the empty place
  const emptyPlace = document.querySelector('.piece.empty');

  // find the row of empty place
  const emptyRow = emptyPlace.parentElement;
  // find children of this row
  const elementsInEmptyRow = emptyRow.querySelectorAll('.piece');

  // find the row of clicked div
  const elementRow = element.parentElement;
  // find children of this row
  const elementsInRow = elementRow.querySelectorAll('.piece');

  // find index of clicked div in the row
  const elementIndex = Array.from(elementsInRow).findIndex((e) => {
    return e === element
  });

  // find index of empty div in the row
  const emptyIndex = Array.from(elementsInEmptyRow).findIndex((e) => {
    return e.classList.contains('empty');
  });

  if (canMove(parseInt(elementRow.dataset.lineNumber), parseInt(emptyRow.dataset.lineNumber), emptyIndex, elementIndex)) {
    // Copy content of selected piece on empty place
    emptyPlace.innerHTML = event.target.innerHTML;
    // Remove class empty on empty place
    emptyPlace.classList.remove('empty');
    // Delete content of selected piece
    element.innerHTML = '';
    // Add class empty to selected piece
    element.classList.add('empty');
  }
}

// Add an event listener on all pieces
pieces.forEach((piece) => {
  piece.addEventListener('click', (event) => {
    move(event.target);
  })
})

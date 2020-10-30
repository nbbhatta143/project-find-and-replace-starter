// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
let changedText = document.querySelector("#result");
const replaceOneButton = document.querySelector(".replaceOne");
// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.

const rowElements = document.querySelectorAll(".row");

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}
// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
  let find = findInput.value;
  let replace = replaceInput.value;
  console.log(find, replace);
  let replaceCount = 0;

  //myStorage(find);

  if (find === "" || replace == "") {
    changedText.innerHTML =
      "<mark>" + "Please provide find and replace text" + "</mark>";
  } else {
    for (let i = 0; i < rowElements.length; i++) {
      const resultElement = getCellElements(rowElements[i]);
      // console.log(rowElements[i]);
      // console.log(resultElement);
      for (let j = 0; j < resultElement.length; j++) {
        let element = resultElement[j].innerHTML;

        if (element.includes(find)) {
          console.log(element);
          resultElement[j].innerHTML =
            "<mark>" + element.replace(find, replace) + "</mark>";
          replaceCount += 1;
        }
      }
    }

    changedText.innerHTML =
      "<mark>" + "You've changed " + replaceCount + " text(s)" + "</mark>";
  }
});
replaceOneButton.addEventListener("click", function () {
  let find = findInput.value;
  let replace = replaceInput.value;
  console.log(find, replace);
  let replaceCount = 0;
  //myStorage(find);

  if (find === "" || replace == "") {
    changedText.innerHTML =
      "<mark>" + "Please provide find and replace text" + "</mark>";
  } else {
    for (let i = 0; i < rowElements.length; i++) {
      const resultElement = getCellElements(rowElements[i]);
      // console.log(rowElements[i]);
      // console.log(resultElement);
      for (let j = 0; j < resultElement.length; j++) {
        let element = resultElement[j].innerHTML;

        if (element.includes(find) && replaceCount < 1) {
          console.log(element);
          resultElement[j].innerHTML =
            "<mark>" + element.replace(find, replace) + "</mark>";
          replaceCount += 1;
        } else {
          break;
        }
      }
    }

    changedText.innerHTML =
      "<mark>" + "You've changed " + replaceCount + " text(s)" + "</mark>";
  }
});
function myStorage(store) {
  store = localStorage.setItem("findItems", store.innerHTML);
  console.log(store.getItem());
}

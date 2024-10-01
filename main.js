function alertSubFunc() {
  let value = element.attributes[0].value;
  alert(value);
}

window.onload = function () {
  document
    .getElementById("subscribe-form")
    .addEventListener("submit", alertSubFunc);
};

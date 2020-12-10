document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#inputName")
    .addEventListener("keyup", function (event) {
      onEnter(event);
    });

  document.querySelector("#inputName").addEventListener("input", function () {
    convert();
  });

  document.querySelector("#copyBtn").addEventListener("click", function () {
    copyToClipboard();
  });
});

function onEnter(event) {
  if (event.keyCode === 13) {
    copyToClipboard();
  }
}

function convert() {
  var taskName = getTextToConvert();
  var vcsBranchName = taskName.toLowerCase().replace(/\s/g, "-");
  document.getElementById("outputName").value = vcsBranchName;
}

function getTextToConvert() {
  return document.getElementById("inputName").value;
}

function copyToClipboard() {
  if (getTextToConvert()) {
    /* Get the text field */
    var copyText = document.getElementById("outputName");

    /* Select the text field */
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    copyText.blur();

    showCopyNotification();
    setTimeout(() => hideCopyNotification(), 2000);
  }
}

function showCopyNotification() {
  var copyNotification = document.getElementById("copiedToClipboard");
  copyNotification.classList.remove("hidden");
  copyNotification.classList.add("visible");
}

function hideCopyNotification() {
  var copyNotification = document.getElementById("copiedToClipboard");
  copyNotification.classList.remove("visible");
  copyNotification.classList.add("hidden");
}

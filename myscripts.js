var modal = document.getElementById("myModal");
var images = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];

  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// ContactFormMethods

function allInputsCorrect() {
  const button = document.getElementById("submitButton");
  if(checkName() && checkEmail() && checkSubject()) button.disabled=false;
}

function checkEmail() {
  const message = document.getElementById("error2");
  message.innerHTML = "";
  if (!validateEmail("email")) message.innerHTML = "Invalid email format";
  else return true;
}

function checkName() {
  const message = document.getElementById("error1");
  message.innerHTML = "";
  if (!validateName("fname")) message.innerHTML = "Invalid name format";
  else return true;
}

function validateEmail(dataField) {
  const x = document.getElementById(dataField).value;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(x);
}

function validateName(dataField) {
  const x = document.getElementById(dataField).value;
  const re = /^(([A-Z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
  let valid = false;
  if (x.length > 50) valid = false;
  else if (!re.test(x)) valid = false;
  else valid = true;
  return valid;
}

function checkSubject() {
  const message = document.getElementById("error3");
  const subjectField = document.getElementById("subject").value;
  message.innerHTML = "";
  if (subjectField == "") {
    message.innerHTML = "Field cannot be empty";
    return false;
  }
  else return true;
}

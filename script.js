function validate() {
  let nip = document.getElementById('nip').value;
  let pass = document.getElementById('pass').value;
  let pass_conf = document.getElementById('pass_conf').value;
  if (!nip || !pass || !pass_conf) {
    alert("Wypełnij wszystkie pola");
  }
  else alert("Zgłoszenie przyjęte");
}
btn2.addEventListener('click', validate);

function myFunction() {
  document.getElementById("password").style.display = "none";
}
btn.addEventListener("click", myFunction);

function myFunction1() {
  document.getElementById("password").style.display = "block";
}
btn1.addEventListener("click", myFunction1);

function checkNip() {
  let nip = document.getElementById('nip').value;
  let nip_length = nip.length;
  if (nip_length < 9) {
    document.getElementById('nip_res').innerHTML = "NIP jest za krótki";
  }
  else if (nip_length >= 10) {
    document.getElementById('nip_res').innerHTML = "NIP jest za długi";
  }
  else {
    document.getElementById('nip_res').innerHTML = "NIP jest ok";
  }
}
nip.addEventListener('keyup', checkNip);

function checkPassword() {
  let pass = document.getElementById('pass');
  let pass_conf = document.getElementById('pass_conf');
  if (pass.value !== pass_conf.value) {
    document.getElementById('pass_check').innerHTML = "Hasło się nie zgadza";
    pass.style.backgroundColor = "red";
    pass_conf.style.backgroundColor = "red";
  }
  else {
    pass.style.backgroundColor = "green";
    pass_conf.style.backgroundColor = "green";
    document.getElementById('pass_check').innerHTML = "Hasło się zgadza";
  }
}
pass_conf.addEventListener('keyup', checkPassword);

function clearInputs() {
  let pass = document.getElementById('pass');
  let pass_conf = document.getElementById('pass_conf');
  pass.style.backgroundColor = "white";
  pass_conf.style.backgroundColor = "white";
  document.getElementById('form').reset();
}
btn3.addEventListener('click', clearInputs);


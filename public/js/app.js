const input = document.querySelectorAll("input");
const name = input[0].value;
const email = input[1].value;
const phone = input[2].value;
const submit = input[3];

submit.addEventListener("submit", (e) => {
  alert("lol");
  e.preventDefault();
});

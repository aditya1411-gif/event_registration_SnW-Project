const form = document.getElementById("regForm");
const popup = document.getElementById("popup");
const welcomeText = document.getElementById("welcomeText");
const detailsBox = document.getElementById("detailsBox");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let urn = document.getElementById("urn").value;
  let batch = document.getElementById("batch").value;
  let event = document.getElementById("event").value;

  welcomeText.innerHTML = `Welcome, <b>${name}</b>!`;

  detailsBox.innerHTML = `
    <b>Name:</b> ${name}<br>
    <b>Email:</b> ${email}<br>
    <b>Phone:</b> ${phone}<br>
    <b>URN:</b> ${urn}<br>
    <b>Batch:</b> ${batch}<br>
    <b>Event:</b> ${event}
  `;

  popup.style.display = "flex";
});

function closePopup() {
  popup.style.display = "none";
  form.reset();
}
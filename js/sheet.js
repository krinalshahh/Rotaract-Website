const scriptURL =
  "https://script.google.com/macros/s/AKfycbzGYX67w2-bAMVhjt3zONPn8FzBTsZS4VcAIispUlg2jOSW6rVxU_t2_zUdssBiXb94/exec";

const form = document.forms["cform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

const form = document.querySelector(".form__content");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  form.reset();
});

const toast = document.getElementById("toast");

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("toast--visible");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 2400);
}

document.querySelectorAll("[data-message]").forEach((element) => {
  element.addEventListener("click", () => {
    showToast(element.dataset.message);
  });
});

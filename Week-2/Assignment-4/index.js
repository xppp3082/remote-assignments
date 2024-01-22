const btnShowExtra = document.querySelector(".call-button");
btnShowExtra.addEventListener("click", () => {
  const extraContent = document.querySelector(".extra-container");
  if (extraContent.style.display === "none") {
    btnShowExtra.textContent = "Hide List";
    extraContent.style.display = "flex";
    // extraContent.removeAttribute("style");
  } else {
    btnShowExtra.textContent = "Show More";
    extraContent.style.display = "none";
  }
});

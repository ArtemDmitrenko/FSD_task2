const ecbOpen = (event) => {
  const { target } = event;
  const cb = target.closest('.js-checkbox-btn');

  if (cb) {
    const checkmark = cb.querySelector(".js-checkmark");
    if (checkmark) {
      const cbTitle = cb.querySelector(".js-checkbox-btn__expandableName");
      const cbList = cb.querySelector(".js-checkbox-btn__expandableForm");
      if (cbTitle) {
        cbList.classList.toggle("checkbox-btn__expandableForm_show");
        checkmark.classList.toggle("checkmark__down");
        checkmark.classList.toggle("checkmark__up");
      }
    }
  }
}

document.addEventListener("click", ecbOpen);
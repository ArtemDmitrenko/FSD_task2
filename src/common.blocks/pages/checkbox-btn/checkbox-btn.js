let ecbOpen = (event) => {
  let { target } = event;
  let cb = target.closest('.checkbox-btn');

  if (cb) {
    let checkmark = cb.querySelector(".checkmark");
    if (checkmark) {
      let cbTitle = cb.querySelector(".checkbox-btn__expandableName");
      let cbList = cb.querySelector(".checkbox-btn__expandableForm");
      if (cbTitle) {
        cbList.classList.toggle("checkbox-btn__expandableForm_show");
        checkmark.classList.toggle("checkmark__down");
        checkmark.classList.toggle("checkmark__up");
      }
    }
  }
}

document.addEventListener("click", ecbOpen);
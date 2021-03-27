let dropdownButtons = document.querySelectorAll(".nav-menu__item_dropdown");
let subLists = document.querySelectorAll(".nav-menu__sub-list");
let checkmarks = document.querySelectorAll(".checkmark");
console.log(dropdownButtons)
console.log(subLists)
console.log(checkmarks)

// Dropdown appears when you click the button
for (let i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].onclick = function() {
    subLists[i].classList.toggle("show");
    checkmarks[i].classList.toggle("checkmark__down");
    checkmarks[i].classList.toggle("checkmark__up");
  };
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  for (let i = 0; i < dropdownButtons.length; i++) {
    if (!document.getElementsByClassName('nav-menu__item_dropdown')[i].contains(event.target)) {
      if (subLists[i].classList.contains('show')) {
        subLists[i].classList.remove('show');
        checkmarks[i].classList.toggle("checkmark__down");
        checkmarks[i].classList.toggle("checkmark__up");
      }
    }
  }
};
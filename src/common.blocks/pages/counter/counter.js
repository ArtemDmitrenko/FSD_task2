let meaning = document.querySelectorAll('.counter__meaning');
let plus = document.querySelectorAll('.counter__btn_plus');
let minus = document.querySelectorAll('.counter__btn_minus');

for (let i = 0; i < meaning.length; i++) {
    plus[i].onclick = () => meaning[i].innerHTML = (meaning[i].innerHTML | 0) + 1
    minus[i].onclick = () => {
        meaning[i].innerHTML = (meaning[i].innerHTML | 0) - 1;
        if (meaning[i].innerHTML < 0) {
            meaning[i].innerHTML = 0;
        }
    }
}
// Dropdown appears when click and dissapear when click outside or btn "apply"
let likeButtonClicked = (event) => {
    let { target } = event;
    let likeButton = target.closest('.like-button__button');
    if (likeButton) {
        let heart = likeButton.querySelector('.like-button__image');

        // Function 'plus' of counter
        let plus = function() {
            let numberOfLikes = likeButton.querySelector('.like-button__counter');
            let counter = Number(numberOfLikes.innerHTML);
            numberOfLikes.innerHTML = counter += 1;
            numberOfLikes.classList.add('like-button__counter_active');
        }

        // Function 'minus' of counter
        let minus = function() {
            let numberOfLikes = likeButton.querySelector('.like-button__counter');
            let counter = Number(numberOfLikes.innerHTML);
            numberOfLikes.innerHTML = counter -= 1;
            numberOfLikes.classList.remove('like-button__counter_active');
        }

        if (heart.innerHTML === 'favorite_border') {
            heart.innerHTML = 'favorite';
            heart.classList.add('like-button__image_active');
            plus();
            likeButton.classList.add('like-button__button_active');

        } else {
            heart.innerHTML = 'favorite_border';
            heart.classList.remove('like-button__image_active');
            minus();
            likeButton.classList.remove('like-button__button_active');
        }       
    }
}



document.addEventListener("click", likeButtonClicked);

        
//         if (dropdownInput) {
//             input.classList.toggle("input__element_border-radius_0");
//             input.classList.add("input__element_brightBorder");
//             dropdownList.classList.toggle("dropdown__list_show");
//         }
//         if (target === dropdownList.querySelector('button[name = "apply"]')) {
//             input.classList.remove("input__element_border-radius_0");
//             input.classList.remove("input__element_brightBorder");
//             dropdownList.classList.remove("dropdown__list_show");
//         }
//     }
//     if (!dropdown) {
//         let dropdownInputArr = document.querySelectorAll('input[name = "guests"]');
//         let dropdownListArr = document.querySelectorAll('.dropdown__list');

//         dropdownInputArr.forEach((item) => {
//             item.classList.remove("input__element_border-radius_0");
//             item.classList.remove("input__element_brightBorder");
//         });
//         dropdownListArr.forEach((item) => {
//             item.classList.remove("dropdown__list_show");
//         });
//     }
// }

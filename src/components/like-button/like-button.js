export default class LikeButton {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.item.addEventListener("click", this.clickOnLikeButton);
  }

  isLiked() {
    const heart = this.item.querySelector(".js-like-button__image");
    if (heart.innerHTML === "favorite_border") {
      return false;
    }
    return true;
  }

  plusLike() {
    const numberOfLikes = this.item.querySelector(".js-like-button__counter");
    let counter = Number(numberOfLikes.innerHTML);
    numberOfLikes.innerHTML = counter += 1;
    numberOfLikes.classList.add("like-button__counter_active");
  }

  minusLike() {
    const numberOfLikes = this.item.querySelector(".js-like-button__counter");
    let counter = Number(numberOfLikes.innerHTML);
    numberOfLikes.innerHTML = counter -= 1;
    numberOfLikes.classList.remove("like-button__counter_active");
  }

  clickOnLikeButton = () => {
    const heart = this.item.querySelector(".js-like-button__image");
    if (this.isLiked()) {
      heart.innerHTML = "favorite_border";
      heart.classList.remove("like-button__image_active");
      this.item.classList.remove("like-button__button_active");
      this.minusLike();
    } else {
      heart.innerHTML = "favorite";
      heart.classList.add("like-button__image_active");
      this.item.classList.add("like-button__button_active");
      this.plusLike();
    }
  };
}

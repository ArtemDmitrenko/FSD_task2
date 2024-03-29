export default class LikeButton {
  constructor(item) {
    this.item = item.querySelector(".js-like-button__button");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.heart = this.item.querySelector(".js-like-button__image");
    this.numberOfLikes = this.item.querySelector(".js-like-button__counter");
    this.heart = this.item.querySelector(".js-like-button__image");
  }

  addEventListeners() {
    this.item.addEventListener("click", this.handleLikeButtonClick);
  }

  isLiked() {
    return this.heart.innerHTML !== "favorite_border";
  }

  plusLike() {
    let counter = Number(this.numberOfLikes.innerHTML);
    this.numberOfLikes.innerHTML = counter += 1;
    this.numberOfLikes.classList.add("like-button__counter_active");
  }

  minusLike() {
    let counter = Number(this.numberOfLikes.innerHTML);
    this.numberOfLikes.innerHTML = counter -= 1;
    this.numberOfLikes.classList.remove("like-button__counter_active");
  }

  handleLikeButtonClick = () => {
    if (this.isLiked()) {
      this.heart.innerHTML = "favorite_border";
      this.heart.classList.remove("like-button__image_active");
      this.item.classList.remove("like-button__button_active");
      this.minusLike();
    } else {
      this.heart.innerHTML = "favorite";
      this.heart.classList.add("like-button__image_active");
      this.item.classList.add("like-button__button_active");
      this.plusLike();
    }
  };
}

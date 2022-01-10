import LikeButton from "Components/like-button/like-button";

export default class Review {
  constructor(item) {
    this.item = item.querySelector(".js-review");
    this.init();
  }

  init() {
    this.likeButton = this.item.querySelector(".js-review__like-button");
    new LikeButton(this.likeButton);
  }
}

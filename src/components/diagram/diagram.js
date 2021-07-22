export default class Diagram {
  constructor(item) {
    this.item = item;
    this.init();
    this.getAttributes();
    this.calcSumOfReviews();
    this.calcLengthsOfAllReviews();
    this.drawElementsOfDiagram();
    this.printAllNumberOfReviews();
  }

  init() {
    this.lengthOfCircle = 364.424672;
    this.$svg = this.item.querySelector(".js-diagram__chart");
    this.wholeNumberOfReviews = this.item.querySelector(".js-diagram__total");
  }

  getAttributeInNumber(review) {
    return Number(this.item.dataset[review]);
  }

  getAttributes() {
    this.model = { good: 0, amazing: 0, notbad: 0, bad: 0 };
    for (let review in this.model) {
      this.model[review] = this.getAttributeInNumber(review);
    }
  }

  calcSumOfReviews() {
    this.sum = Object.values(this.model).reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }

  calcLengthOfOneReview(numberOfReview) {
    return (this.lengthOfCircle * numberOfReview) / this.sum;
  }

  calcLengthsOfAllReviews() {
    this.goodInPixels = this.calcLengthOfOneReview(this.model.good);
    this.amazingInPixels = this.calcLengthOfOneReview(this.model.amazing);
    this.notbadInPixels = this.calcLengthOfOneReview(this.model.notbad);
    this.badInPixels = this.calcLengthOfOneReview(this.model.bad);
  }

  drawElementsOfDiagram() {
    if (this.model.good) {
      this.$svg.insertAdjacentHTML(
        "beforeend",
        `
        <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-green)" style="stroke-dasharray: ${
          this.goodInPixels - 2
        } ${this.lengthOfCircle}; stroke-dashoffset: -1">
        `
      );
    }
    if (this.model.amazing) {
      this.$svg.insertAdjacentHTML(
        "beforeend",
        `
        <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-yellow)" style="stroke-dasharray: ${
          this.amazingInPixels - 2
        } ${this.lengthOfCircle}; stroke-dashoffset: ${-(
          this.goodInPixels + 1
        )}">
        `
      );
    }
    if (this.model.notbad) {
      this.$svg.insertAdjacentHTML(
        "beforeend",
        `
        <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-purple)" style="stroke-dasharray: ${
          this.notbadInPixels - 2
        } ${this.lengthOfCircle}; stroke-dashoffset: ${-(
          this.amazingInPixels +
          this.goodInPixels +
          1
        )}">
        `
      );
    }
    if (this.model.bad) {
      this.$svg.insertAdjacentHTML(
        "beforeend",
        `
        <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-black)" style="stroke-dasharray: ${
          this.badInPixels - 2
        } ${this.lengthOfCircle}; stroke-dashoffset: ${-(
          this.notbadInPixels +
          this.amazingInPixels +
          this.goodInPixels +
          1
        )}">
        `
      );
    }
  }

  printAllNumberOfReviews() {
    this.wholeNumberOfReviews.innerHTML = `${this.sum}<br><span>голосов</span>`;
  }
}

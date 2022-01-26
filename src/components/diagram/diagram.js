export default class Diagram {
  constructor(item) {
    this.item = item.querySelector(".js-diagram");
    this.init();
    this.getAttributes();
    this.calcSumOfReviews();
    this.drawElementsOfDiagram();
    this.showAmount();
  }

  init() {
    this.lengthOfCircle = 364.424672;
    this.$svg = this.item.querySelector(".js-diagram__chart");
    this.wholeNumberOfReviews = this.item.querySelector(".js-diagram__total");
    this.offset = 2;
  }

  getAttributes() {
    const data = JSON.parse(this.item.dataset.array);
    this.model = data.map((item) => {
      const { name, value } = item;
      return {
        key: name,
        value: this.getAttributeInNumber(value),
      };
    });
  }

  calcSumOfReviews() {
    this.sum = 0;
    this.model.forEach((item) => {
      this.sum += item.value;
    });
  }

  drawElementsOfDiagram() {
    let summaryValue = 0;
    this.model.forEach((item) => {
      const { key, value } = item;
      const amount = this.calcLengthOfOneReview(value);
      this.$svg.insertAdjacentHTML(
        "beforeend",
        `
        <circle class='diagram__unit' r='58' cx='50%' cy="50%" stroke="url(#${key})" style="stroke-dasharray: ${amount} ${
          this.lengthOfCircle
        }; stroke-dashoffset: ${-(summaryValue + 1)}">
        `
      );
      summaryValue += amount + this.offset;
    });
  }

  showAmount() {
    this.declinationArr =
      this.wholeNumberOfReviews.dataset.declination.split(", ");
    this.mainText = this.declinate(this.declinationArr);
    this.wholeNumberOfReviews.innerHTML = `${this.sum}<br><span>${this.mainText}</span>`;
  }

  getAttributeInNumber(item) {
    return Number(item);
  }

  calcLengthOfOneReview(numberOfReview) {
    const value =
      (this.lengthOfCircle * numberOfReview) / this.sum - this.offset;
    if (value <= 0) {
      return 0;
    } else {
      return value;
    }
  }

  declinate(type) {
    const remain =
      this.sum % 10 === 2 || this.sum % 10 === 3 || this.sum % 10 === 4;
    let result;
    if (this.sum > 10 && this.sum < 15) {
      result = `${type[2]}`;
    } else if (this.sum % 10 === 1) {
      result = `${type[0]}`;
    } else if (remain) {
      result = `${type[1]}`;
    } else {
      result = `${type[2]}`;
    }
    return result;
  }
}

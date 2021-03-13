const $diagram = document.querySelector('.diagram')

// Getting data atrs from diagram in Number type
const good = Number($diagram.dataset.good)
const amazing = Number($diagram.dataset.amazing)
const notbad = Number($diagram.dataset.notbad)
const bad = Number($diagram.dataset.bad)

// Creating object with data
const model = { good, amazing, notbad, bad }

// Creating array from number of reviews and calculating sum of them:
const sum = Object.values(model).reduce((previousValue, currentValue) => previousValue + currentValue)
const $svg = document.querySelector('.diagram__chart')

// Constant length of circle
const lengthOfCircle = 364.424672

// Proportion length due to total sum of reviews
const goodInPixels = (lengthOfCircle * good) / sum;
const amazingInPixels = (lengthOfCircle * amazing) / sum;
const notbadInPixels = (lengthOfCircle * notbad) / sum;
const badInPixels = (lengthOfCircle * bad) / sum;

if (model.good) {
  $svg.insertAdjacentHTML('beforeend',
    `
    <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-green)" style="stroke-dasharray: ${goodInPixels - 2} ${lengthOfCircle}; stroke-dashoffset: -1">
    `)
}
if (model.amazing) {
  $svg.insertAdjacentHTML('beforeend',
    `
    <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-yellow)" style="stroke-dasharray: ${amazingInPixels - 2} ${lengthOfCircle}; stroke-dashoffset: ${-(goodInPixels + 1)}">
    `)
}
if (model.notbad) {
  $svg.insertAdjacentHTML('beforeend',
    `
    <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-purple)" style="stroke-dasharray: ${notbadInPixels - 2} ${lengthOfCircle}; stroke-dashoffset: ${-(amazingInPixels + goodInPixels +1)}">
    `)
}
if (model.bad) {
  $svg.insertAdjacentHTML('beforeend',
    `
    <circle class='diagram__unit diagram__unit_good' r='58' cx='50%' cy="50%" stroke="url(#linear-gradient-black)" style="stroke-dasharray: ${badInPixels - 2} ${lengthOfCircle}; stroke-dashoffset: ${-(notbadInPixels + amazingInPixels + goodInPixels +1)}">
    `)
}

// Printing the total number of reviews on the page
const wholeNumberOfReviews = document.querySelector('.diagram__total')
wholeNumberOfReviews.innerHTML = `${sum}<br><span>голосов</span>`
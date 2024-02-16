const inInput = document.querySelector('.in-input')
const submitBtn = document.querySelector('.calculator form .submit')
const resultWrapper = document.querySelector('.result-container .result')

function incheToMetarConvert(number) {
    return parseInt(number * 0.0254)
}

submitBtn.addEventListener('click', () => {
    let result = parseInt(inInput.value) * 0.0254
    resultWrapper.textContent = `${inInput.value} inch = ${result} Metars`
})
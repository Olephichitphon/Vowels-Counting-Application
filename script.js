const countElement = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup", () => {
    let word = input.value.toLocaleLowerCase()
    let vowelCount = 0
    for (let i = 0; i < word.length; i++) {
        let leter = word[i]
        if (leter.match(/[a,e,i,o,u]/)) {
            vowelCount++
        }
    }
    countElement.innerHTML = `${vowelCount}`
})
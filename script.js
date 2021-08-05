// const isBig = function(number){
//     if (number > 100){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isBig(99))
// console.log(isBig(102))
// console.log(isBig(80))
// console.log(isBig(120))



// const bouncerBot = function(maxPeople, numberPeople, age ) {
//     let responseBrenda = ""
//     if (numberPeople < maxPeople && age >= 18){
//         responseBrenda = "Come in"
//     } else if (numberPeople >= maxPeople) {
//         responseBrenda = "It's too busy now, come back later"
//     } else if (age < 18) {
//         responseBrenda ="This is a club for adults"
//     } return responseBrenda
// }

// console.log(bouncerBot(105, 101, 18))
// console.log(bouncerBot(105, 120, 18))
// console.log(bouncerBot(105, 101, 17))
// console.log(bouncerBot(105, 101, 35))

const average = function(num1, num2, num3, num4, num5){
    let totalNumber = num1 + num2 + num3 + num4 + num5
    let averageNumber = totalNumber/5
    let roundAverage = Math.round(averageNumber)
    return roundAverage
}

console.log(average(2, 2, 3, 4, 4))
console.log(average(1, 2, 3, 4, 5))
console.log(average(7, 32, 5, 6, 7))
console.log(average(26, 72, 43, 86, 5))



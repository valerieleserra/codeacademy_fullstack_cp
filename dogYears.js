// my age
let myAge = 10

// early years 
let earlyYears = 2

earlyYears *=10.5

let laterYears = myAge - 2

laterYears *=4

console.log(laterYears)
console.log(earlyYears)

//early years and later years to calculate my age in dog years
let myAgeInDogYears = laterYears + earlyYears
console.log(myAgeInDogYears)

// my name in string method with lowercase method
let myName = 'Valerie'.toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
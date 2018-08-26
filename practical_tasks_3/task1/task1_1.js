let person = {
    "first_name" : "Olena ",
    "last_name" : "Halenok",
    "location" : "Lviv",
    "rate" : "1"
}
console.log(person.first_name)

let string = JSON.stringify(person)
console.log(string)

person.rate = 5
console.log(person.rate)
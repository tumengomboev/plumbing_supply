const name = "Tumen"
let prefix = "hi"
prefix = "bye"
// console.log(name + " " + prefix)
let num = 3
let number = 2
let bool = true
bool = false
let empty = null
let ndf
// console.log(name + ' "abc" ' + prefix + (num + number + bool))
// console.log(ndf)
let long_string = `${name} ${prefix}!`
// console.log(long_string)

// let age
// let thereIsTrustee

// age = prompt("enter your age")
// thereIsTrustee = confirm("Do you have trustii?")

// const missingData = "You have missed some required fields"
// const allowed = "permision granted"
// const notAllowed = "you don't have permision"
// const partiallyAllowed = "you have a limited permision"
// let message
// if (age === undefined || !age || thereIsTrustee === undefined || thereIsTrustee === null) {
//     message = missingData
// }
// else if (age < 21 && age > 17 && !thereIsTrustee) {
//     message = partiallyAllowed
// }
// else if (age < 18 || thereIsTrustee) {
//     message = notAllowed
// }
// else {
//     message = allowed
// }
// console.log(message)
// alert(message)


// let users = ["Alex", "John", "Alice"]
// users[1] = [1, 2, 3]
// users.push("Kate")
// console.log(users)
// console.log(users.length)
// console.log(users[2].length)


let users = [
    {
        login: "john1",
        password: "321abc",
        us_citizen: true,
    },
    {
        login: "kate",
        password: "09qw",
        us_citizen: false,
    },
]
let user1 = {
    login: "alex88", 
    password: "qwerty123",
    us_citizen: true,
}
users.push(user1)
//console.log(users[1].login)

// if (confirm("Would you like to add a new user?")) {
//     let userLogin = prompt("Enter login")
//     let userPassword = prompt("Enter password")
//     let isCityzen = confirm("Are you cityzen?")
//     users.push(
//         {
//             login: userLogin,
//             password: userPassword,
//             us_citizen: isCityzen,
//         },
//     )
// }
// alert(JSON.stringify(users))

// for(let i = 0; i < users.length; i++) {
//     users[i].us_citizen = false
// }
// alert(JSON.stringify(users))

// for(let i = 0; i < 4; i++) {
//     alert(i)
// }

// let i = 0
// while (true) {
//     alert(i)
//     i++
//     if (i > 3) {
//         break
//     }
// }

// for (const key in users) {
//     alert(users[key].login)
// }

// for (const value of users) {
//     if (!value.us_citizen || value.login[0] == "a") {
//         continue
//     }
//     alert(value.login)
// } 

// for (const value of users) {
//     if (value.login[0] == "a") {
//         continue
//     }
//     alert(value.login)
// }

// function sayHi(name) {
//     name = name[0].toUpperCase() + name.substring(1)
//     alert(`hello, ${name}!`)
// }
// sayHi("alex")
// sayHi("john")

function averageValue(a, b) {
    let c = (a + b) / 2
    console.log("check1")
    return c
    console.log("check2")
}

function printResult(value) {
    console.log(`result: ${value}`)
}

// let average1 = averageValue(5, 3)
// let average2 = averageValue(6, 6)
// printResult(average1 + average2)

function showSumOfAverages(c, d, e, f) {
    let average1 = averageValue(c, d)
    let average2 = averageValue(e, f)
    printResult(average1 + average2)
}
//showSumOfAverages(5, 3, 6, 36)

function checkAge(age) {
    //let result
    if(age <= 1) {
        //result = "infant"
        return "infant"
    }
    else if(age >= 2 && age < 5) {
        //result = "toddler"
        return "toddler"
    }
    else if(age >= 5 && age < 13) {
        //result = "youth"
        return "youth"
    }
    else {
        //result = "adult"
        return "adult"
    }
    //return result
}

//alert(checkAge(100))




// DOM model

// document.body.onclick = function() {
//     document.body.style.background = "blue"
// }
// document.body.addEventListener(
//     "click", 
//     function() {
//         document.body.style.background = "red"
//     }
// )

document.querySelector(".logo_box > img").addEventListener("click", function() {
    document.getElementById("page").style.display = "none"
})

``
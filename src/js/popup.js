document.querySelectorAll(".popup .closer").forEach(item => {
    item.addEventListener("click", event => {
        event.target.parentElement.classList.add("hidden")
    })
})

// document.querySelectorAll(".popup .closer").forEach(function(item) {
//     item.addEventListener("click", function(event) {
//         event.target.parentElement.classList.add("hidden")
//     })
// })

// document.querySelectorAll(".popup .closer").forEach(item => {
//     item.addEventListener("click", (event, qwerty) => {
//         event.target.parentElement.classList.add("hidden")
//     })
// })

document.querySelectorAll(".popup_opener").forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault()
        if (e.target.dataset.hasOwnProperty("popup_id")) {
            document.getElementById(e.target.dataset.popup_id).classList.remove("hidden")
        }
        if (e.target.dataset.hasOwnProperty("close_popup_id")) {
            document.getElementById(e.target.dataset.close_popup_id).classList.add("hidden")
        }
    })
})

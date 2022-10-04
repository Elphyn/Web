
let count = 0
const countEL = document.getElementById("h1")
const bigBtn = document.getElementById("big")

function increment(){
    count = count + 1
    countEL.innerText = count

}

function save(){
    console.log("Saved: ",countEL.innerText)
}

function del(){
    count = 0
    countEL.innerText = count
    console.log("Reset count")
}
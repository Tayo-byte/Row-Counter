//document.getElementById("count-el").innerText = 5

//let count = 5
// count = count + 1
//console.log(count)

// intialize count as 0
let count = 0

//listen for clicks on the increment button
//document.getElementById("count").innerText = 5

//increment the count variable when the button is clicked

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

console.log(countEl)

function increment(){
    count += 1
    countEl.innerText = count
   }
//change the count-el in the HTML to reflect the new count

 
function save(){
 let preCount = count + " - "
 saveEl.innerText += " " + preCount
count = 0
countEl.innerText = 0
 }

  
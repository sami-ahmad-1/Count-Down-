const endDate = "30 Aug 2024 12:00 PM"

document.getElementById("end-date").innerText = endDate

const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)     // new Date(endDate) will conver the endDate to milliseconds
    const now = new Date()            //newD Date() will give the current date and Time
    const diff = (end-now)/1000
    input[0].value =  Math.floor(diff/ 3600  / 24)  // This will display number of Days
    input[1].value = Math.floor((diff/3600) % 24)   // This will Calculate the Hours
    input[2].value = Math.floor((diff / 60) % 60)   // This Will Calculate the Minutes
    input[3].value = Math.floor((diff%60))          // This will calculate the Seconds
}

setInterval(()=>{
    clock()
},1000)
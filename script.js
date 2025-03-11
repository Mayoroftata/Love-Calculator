function toast(message = 'Welcome', color = 'red', duration = 3000) {
    Toastify({
        text: message,
        duration: duration,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // top or bottom
        position: "right", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

const lover1 = document.getElementById("firstPerson")
const lover2 = document.getElementById("secondPerson")
calculate.addEventListener('click', ()=>{
    const percentage = Math.floor(Math.random()*100)
    
    if (lover1.value==="" || lover2.value==="") {
        toast('Fill in your names','red', 3000)
    } else if (percentage<=40){
        showcase(percentage)
        showcase2.innerHTML = "You are not meant to be together &#128546"
        setTimeout(()=>{
            lover1.value=""
            lover2.value=""
            showcase1.innerHTML=""
            showcase2.innerHTML=""
        }, 4000)
        
    }else if (percentage>40 && percentage<60){
        showcase(percentage)
        showcase2.innerHTML = "You can still work it out if you really want it &#128540"
        setTimeout(()=>{
            lover1.value=""
            lover2.value=""
            showcase1.innerHTML=""
            showcase2.innerHTML=""
        }, 4000)
    }else if (percentage>60 && percentage<80){
        showcase(percentage)
        showcase2.innerHTML = "Just reach out to each other &#128526"
        setTimeout(()=>{
            lover1.value=""
            lover2.value=""
            showcase1.innerHTML=""
            showcase2.innerHTML=""
        }, 4000)
    } else if (percentage>=80){
        showcase(percentage)
        showcase2.innerHTML = "You guys are match made in heaven &#128525"
        setTimeout(()=>{
            lover1.value=""
            lover2.value=""
            showcase1.innerHTML=""
            showcase2.innerHTML=""
        }, 4000)
    } 
})
function showcase(value){
    showcase1.innerHTML += `<p>${lover1.value} and ${lover2.value} are ${value}% compatible</p>`
}

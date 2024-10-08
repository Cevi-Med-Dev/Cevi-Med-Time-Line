const allCircles = document.querySelectorAll(".arrow")

console.log(allCircles)
allCircles.forEach(circle => {
    circle.addEventListener("click", ({target})=>{
        console.log("clicked arrow",   target)
        target.classList.toggle("flip")
        circle.parentNode.querySelector("aside.moreInfo").classList.toggle("hidden")
     
    })
})
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
var translatebtn = document.querySelectorAll(".translate-btn")

translatebtn.forEach( function(btn){
    btn.onclick= function(){
        alert("Text has been translated.")
    }
})
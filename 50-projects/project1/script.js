const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {  //added an event listner monitor the cursor activity 
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//function to remove the panel as active if the cursor did not click on the panel
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} 
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById("color-picker")
const backgroundPicker = document.getElementById("background-picker")

//document.body.classList.add("clase-ejemplo")

function toggleTheme (){
   
    //alert('me diste click');
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")){
        
        toggleThemeBtn.textContent = "activar lightmode";

    } else {
        
        toggleThemeBtn.textContent = "activar darkmode";

    }
}


toggleThemeBtn.addEventListener("click", function(){
    toggleTheme()
})








//cambiacolor de texto
colorPicker.addEventListener("change", function(){
    document.body.style.color=colorPicker.value;
});

backgroundPicker.addEventListener("change", function(){
    document.body.style.backgroundColor=backgroundPicker.value;
});
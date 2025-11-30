const div_loading = document.getElementById("div_loading")
div_loading.innerHTML = "";
const h1 = document.createElement("h1")
h1.classList.add("loading-text")
div_loading.appendChild(h1)

//affichage loading
const text = "L O A D I N G"
h1.textContent = text[0]
let i  = 1
loading = setInterval( _ => {
    h1.textContent += text[i]
    h1.style.color = "cyan"
    console.log(h1.textContent)
    i++
    if  (i>=text.length){
        h1.textContent = text[0]
        i = 1
    }
        
}, 200)

//définition fin loading
nbAlea = Math.random() * (10-3)+3
console.log(nbAlea)
setTimeout(() => {
    h1.textContent = ""
    clearInterval(loading)
    h1.textContent = "W e l c o m e";

    setTimeout(() =>{
        h1.classList.add("slide-up")
        document.getElementById("home").style.display = "flex";
        document.getElementById("bandeau").style.display = "flex";
        document.getElementById("education").style.display = "flex";
        document.getElementById("technicalSkill").style.display = "flex";
        document.getElementById("project").style.display = "flex";
        document.getElementById("aboutMe").style.display = "flex";
        document.getElementById("experience").style.display = "flex";
        document.getElementById("contact").style.display = "flex";
        document.getElementById("portfolio_footer").style.display = "flex";
        document.getElementById("experience").style.display = "flex";
    },2000)

}, nbAlea * 1000);
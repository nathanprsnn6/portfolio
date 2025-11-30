//Home
let text_home = "Application Developer"
let devApp = "Application Developer"
let devWeb = "Web Developer"
let boolDev = true;
let ecriture = true;
y  = 0
setTimeout(()=>{
    setInterval( _ => {
        if (ecriture)
        {
            document.querySelector(".home_dev").textContent += text_home[y]
            y++
            if  (y>=text_home.length)
                ecriture = false
        }
        else
        {
            document.querySelector(".home_dev").textContent = document.querySelector(".home_dev").textContent.substring(0,document.querySelector(".home_dev").textContent.length-1)
            y--;

            if (y < 0)
            {
                ecriture = true
                y = 0
                if (boolDev)
                {
                    text_home = devWeb
                    boolDev = false
                }
                else
                {
                    text_home = devApp
                    boolDev = true
                }
            }
        }
        }, 200)
    }, nbAlea * 1000 + 2000)




//TechnicalSkill
document.querySelectorAll(".test").forEach(div => {
    div.addEventListener("mouseenter", ()=> {
        div.querySelector(".div_progression").style.display = "flex";
    })

    div.addEventListener("mouseleave", ()=> {
        div.querySelector(".div_progression").style.display= "none";
    })
})




//Project
document.querySelectorAll(".but_project").forEach(button => {


    button.addEventListener("mouseenter", ()=> {
        button.querySelector("h1").classList.add("hoever")
    })

    button.addEventListener("mouseleave", ()=> {
        button.querySelector("h1").classList.remove("hoever")
    })

    button.addEventListener("click", _ =>{
        if(button.id == "fifa"){
            document.getElementById("fifaTest").style.display = "flex";
            document.getElementById("project_test").style.display = "none";
            document.getElementById("pilotTest").style.display = "none";
            document.getElementById("magicnetTest").style.display = "none";
        }
        if(button.id == "pilot"){
            document.getElementById("fifaTest").style.display = "none";
            document.getElementById("project_test").style.display = "none";
            document.getElementById("pilotTest").style.display = "flex";
            document.getElementById("magicnetTest").style.display = "none";
        }
        if(button.id == "magicnet"){
            document.getElementById("fifaTest").style.display = "none";
            document.getElementById("project_test").style.display = "none";
            document.getElementById("pilotTest").style.display = "none";
            document.getElementById("magicnetTest").style.display = "flex";
        }
    })
});


const filterBouton = document.querySelectorAll(".btn-filter");
const projects = document.querySelectorAll(".but_project");

filterBouton.forEach(button =>{
    button.addEventListener('click',()=>{
        document.querySelector(".select").classList.remove("select");
        button.classList.add("select");

        const filtre = button.getAttribute("data-filter");
        console.log(filtre);
        projects.forEach(project => {
            console.log(project.getAttribute('data-categorie'));
            // Si le filtre est 'all' OU si la catégorie du projet correspond au filtre
            if (filtre  === 'all' || project.getAttribute('data-categorie') === filtre) {
                project.style.display = "flex";
            } else {
                project.style.display = "none";
            }
        });

    });
});
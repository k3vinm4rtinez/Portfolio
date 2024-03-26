// TITULO

function titleAnimation(){

    let letters = [
        ["K", "e", "v", "i", "n", " ", "M", "a", "r", "t", "í", "n", "e", "z"],
    ];

    let typebar = document.getElementById("typebar");

    let letterCounter = -1;
    let nivelArray = 0;

    const container = document.getElementById("letter-container");

    function printText(){

        letterCounter++;
        container.textContent += letters[nivelArray][letterCounter];

        if(letterCounter === letters[nivelArray].length -1){
            clearInterval(interval);
            typebar.style.animation = "typebar 1.5s infinite";
        }

    }

    let interval = setInterval(printText, 150);

}

window.addEventListener("load", titleAnimation);


// HABILIDADES

const skillBox1 = document.getElementById("sb1");
const skillBox2 = document.getElementById("sb2");
const skillBox3 = document.getElementById("sb3");
const skillBox4 = document.getElementById("sb4");
const skillBox5 = document.getElementById("sb5");
const skillBox6 = document.getElementById("sb6");


window.addEventListener('scroll', function(){

    setTimeout(() => { let positionSB1 = skillBox1.getBoundingClientRect().top;

    if(positionSB1 < window.scrollY){
        skillBox1.style.animation = "aparecer 1s ease-out";
        skillBox1.style.visibility = "visible";
    }}, 1000);

});


    
    window.addEventListener('scroll', function(){

        setTimeout(() => { let positionSB2 = skillBox2.getBoundingClientRect().top;
    
        if(positionSB2 < window.scrollY){
            skillBox2.style.animation = "aparecer 1s ease-out";
            skillBox2.style.visibility = "visible";
        }}, 1500);
    
    });
    
    window.addEventListener('scroll', function(){

        setTimeout(() => { let positionSB3 = skillBox3.getBoundingClientRect().top;
    
        if(positionSB3 < window.scrollY){
            skillBox3.style.animation = "aparecer 1s ease-out";
            skillBox3.style.visibility = "visible";
        }}, 2000);
    
    });
    
    window.addEventListener('scroll', function(){

        setTimeout(() => { let positionSB4 = skillBox4.getBoundingClientRect().top;
    
        if(positionSB4 < (window.scrollY)){
            skillBox4.style.animation = "aparecer 1s ease-out";
            skillBox4.style.visibility = "visible";
        }}, 2500);
    
    });
    
    window.addEventListener('scroll', function(){

        setTimeout(() => { let positionSB5 = skillBox5.getBoundingClientRect().top;
    
        if(positionSB5 < (window.scrollY)){
            skillBox5.style.animation = "aparecer 1s ease-out";
            skillBox5.style.visibility = "visible";
        }}, 3000);
    
    });

    window.addEventListener('scroll', function(){

        setTimeout(() => { let positionSB6 = skillBox6.getBoundingClientRect().top;
    
        if(positionSB6 < (window.scrollY)){
            skillBox6.style.animation = "aparecer 1s ease-out";
            skillBox6.style.visibility = "visible";
        }}, 3500);
    
    });




const nav = document.querySelector("nav");
let isNavHidden = false;
let timeout = null;

const navHome = document.querySelector('.nav_home')
const navSkills = document.querySelector('.nav_skills')
const navAboutMe = document.querySelector('.nav_aboutMe')
const navContact = document.querySelector('.nav_contact')

const divHome = document.querySelector("header")
const divSkills = document.querySelector(".main-container-skills-boxes")
const divSkillsMobile = document.querySelector('.main-container-skills-title')
const divAboutMe = document.querySelector(".main-container-aboutme-title")
const divContact = document.querySelector(".main-container-contact-title")

window.addEventListener('scroll', () => {
    clearTimeout(timeout);

    if (window.scrollY > 0 && !isNavHidden) {
        nav.style.animation = "navUp 0.25s linear";
        setTimeout(() => {
            nav.style.display = "none";
            isNavHidden = true;
        }, 250);
    } else {
        timeout = setTimeout(() => {
            nav.style.display = "flex";
            nav.style.animation = "navDown 0.25s linear";
            isNavHidden = false;
        }, 500);
    }
});

navHome.addEventListener('click', () => {
    const topOffset = divHome.getBoundingClientRect().top + window.scrollY - divHome.marginTop;
    window.scrollTo({
        top: topOffset,
        behavior: "smooth"
    });
});

navSkills.addEventListener('click', () => {

    if(divSkills.style.display === "block"){
        const topOffset = divSkills.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: topOffset,
            behavior: "smooth"
        });
    }else{
        const topOffset = divSkillsMobile.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: topOffset,
            behavior: "smooth"
        });
    }

});

navAboutMe.addEventListener('click', () => {
    const topOffset = divAboutMe.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: topOffset,
        behavior: "smooth"
    });
});

navContact.addEventListener('click', () => {
    const topOffset = divContact.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: topOffset,
        behavior: "smooth"
    });
});
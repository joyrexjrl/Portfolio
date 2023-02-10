const sections = document.querySelectorAll("section");
const sectionOne = document.querySelector(".headSection");

const navbarImageIntro = document.getElementById("imageIntro");
const navbarImageProjects = document.getElementById("imageProjects");
const navbarImageAbout = document.getElementById("imageAbout");
const navbarImageSkills = document.getElementById("imageSkills");

const headBackgroundLogo = document.getElementById("headSectionBackgroundLogo");
const projectBackgroundLogo = document.getElementById("projectSectionBackgroundLogo");
const aboutBackgroundLogo = document.getElementById("aboutSectionBackgroundLogo");
const skillsBackgroundLogo = document.getElementById("skillSectionBackgroundLogo");

const options= {
    rootMargin: "-25% 0% -25% 0%",
    threshold: 0.4
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {        
        if(!entry.isIntersecting) return;

        if(entry.target === document.getElementById("intro")){
            navbarImageIntro.classList.add("navLocation");
            headBackgroundLogo.classList.add("highlightedSectionLogo");
        }else{
            navbarImageIntro.classList.remove("navLocation");
            headBackgroundLogo.classList.remove("highlightedSectionLogo");
        }

        if(entry.target === document.getElementById("projects")){
            navbarImageProjects.classList.add("navLocation");
            projectBackgroundLogo.classList.add("highlightedSectionLogo");
        }else{
            navbarImageProjects.classList.remove("navLocation");
            projectBackgroundLogo.classList.remove("highlightedSectionLogo");
        }

        if(entry.target === document.getElementById("about")){
            navbarImageAbout.classList.add("navLocation");
            aboutBackgroundLogo.classList.add("highlightedSectionLogo");
        }else{
            navbarImageAbout.classList.remove("navLocation");
            aboutBackgroundLogo.classList.remove("highlightedSectionLogo");
        }        

        if(entry.target === document.getElementById("skills")){
            navbarImageSkills.classList.add("navLocation");
            skillsBackgroundLogo.classList.add("highlightedSectionLogo");
        }else{
            navbarImageSkills.classList.remove("navLocation");
            skillsBackgroundLogo.classList.remove("highlightedSectionLogo");
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
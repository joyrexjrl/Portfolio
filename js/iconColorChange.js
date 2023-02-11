const sections = document.querySelectorAll("section");
const sectionOne = document.querySelector(".head_section");

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
            navbarImageIntro.classList.add("nav_location");
            headBackgroundLogo.classList.add("highlighted_section_logo");
        }else{
            navbarImageIntro.classList.remove("nav_location");
            headBackgroundLogo.classList.remove("highlighted_section_logo");
        }

        if(entry.target === document.getElementById("projects")){
            navbarImageProjects.classList.add("nav_location");
            projectBackgroundLogo.classList.add("highlighted_section_logo");
        }else{
            navbarImageProjects.classList.remove("nav_location");
            projectBackgroundLogo.classList.remove("highlighted_section_logo");
        }

        if(entry.target === document.getElementById("about")){
            navbarImageAbout.classList.add("nav_location");
            aboutBackgroundLogo.classList.add("highlighted_section_logo");
        }else{
            navbarImageAbout.classList.remove("nav_location");
            aboutBackgroundLogo.classList.remove("highlighted_section_logo");
        }        

        if(entry.target === document.getElementById("skills")){
            navbarImageSkills.classList.add("nav_location");
            skillsBackgroundLogo.classList.add("highlighted_section_logo");
        }else{
            navbarImageSkills.classList.remove("nav_location");
            skillsBackgroundLogo.classList.remove("highlighted_section_logo");
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
const sections = document.querySelectorAll("section");
const sectionOne = document.querySelector(".headSection");

const options= {
    rootMargin: "-25% 0% -25% 0%",
    threshold: 0.4
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {        
        if(!entry.isIntersecting){
            return;
        }

        if(entry.target === document.getElementById("intro")){
            document.getElementById("imageIntro").classList.add("navLocation");
        }else{
            document.getElementById("imageIntro").classList.remove("navLocation");
        }

        if(entry.target === document.getElementById("about")){
            document.getElementById("imageAbout").classList.add("navLocation");
        }else{
            document.getElementById("imageAbout").classList.remove("navLocation");
        }

        if(entry.target === document.getElementById("projects")){
            document.getElementById("imageProjects").classList.add("navLocation");
        }else{
            document.getElementById("imageProjects").classList.remove("navLocation");
        }

        if(entry.target === document.getElementById("skills")){
            document.getElementById("imageSkills").classList.add("navLocation");
        }else{
            document.getElementById("imageSkills").classList.remove("navLocation");
        }                
        //console.log(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function() {
    let aboutMeButton = document.getElementById("linkAboutMe");
    let aboutMeText = document.getElementById("aboutMeMobile");
    let aboutMeLinks = document.getElementById("aboutMeMobileLinks");
    aboutMeButton.addEventListener("click", function() {
        aboutMeText.style.display = (aboutMeText.style.display === "none" || aboutMeText.style.display === "") 
            ? "block" 
            : "none";

            aboutMeLinks.style.display = (aboutMeText.style.display === "none" || aboutMeText.style.display === "") 
        ? "block" 
        : "none";

        aboutMeButton.textContent = (aboutMeText.style.display === "none" || aboutMeText.style.display === "") 
        ? "Sobre mí"
        : "Links";
    });

});
const navlinks = document.querySelectorAll(".nav-item");
navlinks.forEach((link) => {
  link.addEventListener("click", function () {
    navlinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("nav");
  
    // Function to toggle navigation menu visibility
    function toggleNavMenu() {
      if (navMenu.style.display === "none") {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection="column";
        navMenu.style.marginTop="3.5em";
        navMenu.style.position="fixed";
        navMenu.style.textAlign="center";
        navToggle.style.position="fixed";
      } else {
        navMenu.style.display = "none";
      }
    }
  
    
    navToggle.addEventListener("click", function(){
        if (window.innerWidth < 530) {
            toggleNavMenu();
        }
    });

    function handleWindowResize() {
        if (window.innerWidth > 530) {
            navMenu.style.display = "flex";
            navMenu.style.flexDirection="row";
            navMenu.style.marginTop="0em";
            navMenu.style.position="fixed";
            navMenu.style.textAlign="center";
            navToggle.style.position="fixed";
        } 
        else{
            toggleNavMenu();
        }
      }
    
      handleWindowResize();
    
      window.addEventListener("resize", handleWindowResize);

  });
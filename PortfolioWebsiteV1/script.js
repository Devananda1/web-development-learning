const button =
document.getElementById("darkModeBtn");

button.addEventListener(
    "click",
    function(){

        document.body.classList.toggle(
            "dark-mode"
        );

        if(
            document.body.classList.contains(
                "dark-mode"
            )
        ){
            button.textContent="☀️";
        }

        else{
            button.textContent="🌙";
        }

    }
);
window.onload = function(){

    alert(
        "Welcome to Devananda's Portfolio!"
    );

}
const sections =
document.querySelectorAll(".section");

window.addEventListener(
    "scroll",
    function(){

        sections.forEach(
            function(section){

                const sectionTop =
                section.getBoundingClientRect().top;

                if(sectionTop < 500){

                    section.classList.add(
                        "show"
                    );

                }

            }
        );

    }
);
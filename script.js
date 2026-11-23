
const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");

openButton.addEventListener("click", function() {

    letter.classList.add("show");

    openButton.innerText = "My Letter Is Open ❤️";

    openButton.style.display = "none";

    letter.scrollIntoView({
        behavior: "smooth"
    });

});

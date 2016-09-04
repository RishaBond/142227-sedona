var button = document.querySelector(".search");
var popup = document.querySelector(".choose-hotels");

button.addEventListener("click", function(event) {
    if (popup.classList.contains("choose-hotels-wow")) {
        event.preventDefault();
        popup.classList.remove("choose-hotels-wow");
    } 
    else {
        event.preventDefault();
        popup.classList.add("choose-hotels-wow");
    }
});
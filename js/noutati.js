function toggleText(moreTextId, buttonElement) {
    var moreText = document.getElementById(moreTextId);
    var square = buttonElement.closest('.square');
    
    if (moreText.classList.contains("hidden-content")) {
        moreText.classList.remove("hidden-content");
        moreText.classList.add("show-content");
        square.style.height = square.scrollHeight + "px";
        buttonElement.textContent = "Read Less";
    } else {
        moreText.classList.remove("show-content");
        moreText.classList.add("hidden-content");
        square.style.height = "430px";
        buttonElement.textContent = "Read More";
    }
}
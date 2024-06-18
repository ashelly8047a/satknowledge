function showDropdown() {
    document.getElementById("searchDropdown").style.display = "block";
}

function hideDropdown() {
    setTimeout(function() {
        document.getElementById("searchDropdown").style.display = "none";
    }, 100);
}

function slide(direction, sectionId) {
    const container = document.getElementById(sectionId);
    const scrollAmount = container.clientWidth;
    container.scrollLeft += direction * scrollAmount;
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    const indicators = document.getElementsByClassName("indicator");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
}

setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;

    function MoveSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    const prevButton = document.getElementById('prevBtn');

    prevButton.addEventListener("click", () => {
        MoveSlides(-1)
    });

    const nextButton = document.getElementById('nextBtn');

    nextButton.addEventListener("click", () => {
        MoveSlides(1)
    });

    const colorPicker1 = document.getElementById("color1");

    colorPicker1.addEventListener("change", (event) => {
        const selectedColor = event.target.value;
        const slide1 = document.getElementById("slide1");
        slide1.style.backgroundColor = selectedColor;
    })

    const colorPicker2 = document.getElementById("color2");

    colorPicker2.addEventListener("change", (event) => {
        const selectedColor = event.target.value;
        const slide1 = document.getElementById("slide2");
        slide1.style.backgroundColor = selectedColor;
    })

    const colorPicker3 = document.getElementById("color3");

    colorPicker3.addEventListener("change", (event) => {
        const selectedColor = event.target.value;
        const slide1 = document.getElementById("slide3");
        slide1.style.backgroundColor = selectedColor;
    })

})
